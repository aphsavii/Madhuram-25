import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerImage from "/assets/registerFooterFlower.svg";

const Register = () => {
  const [slietStudent, setSlietStudent] = useState(true);
  const [choosenOne, setChoosenOne] = useState(false);
  const contactNo = useRef(null);
  const regNo = useRef(null);

  const Dept = {
    CSE: "Computer Science and Engineering",
    ECE: "Electronics and Communication Engineering",
    EE: "Electrical Engineering",
    IN: "Instrumentation Engineering",
    ME: "Mechanical Engineering",
    Civil: "Civil Engineering",
    CT: "Chemical Technology",
    FT: "Food Technology",
  };
  const GraduationYear = {
    2025: 2025,
    2026: 2026,
    2027: 2027,
    2028: 2028,
  };
  const events = [
    "Bhangra",
    "Singing(solo/duet/group)",
    "Band Performance",
    "Drama / Skit",
    "Rapping",
    "Stand-Up Comedy",
    "Nukkad Natak",
    "Mono acting",
    "Poetry / Storytelling",
    "Modelling",
    "Choreography",
    "Beatboxing",
  ];

  const clickSubmission = () => {
    if (!validateContact(contactNo.current.value)) {
      alert("Please Enter a Valid 10 digit Contact Number");
      return;
    }
    if (!validateRegNo(regNo.current.value)) {
      alert("Please Enter a valid Registration Number");
      return;
    }
    // submission logic
  };

  return (
    <>
      <div className=" bg-texture-register relative w-full">
        <Navbar />

        <div className="">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration:0.5}}
              className="w-full h-16 lg:h-28 bg-repeat-x bg-[length:auto_100%] bg-top "
              style={{
                backgroundImage: "url('/assets/UpperBanner.png')",
              }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 2 }}
            >
              <img
                className="w-64 md:w-96 m-1"
                src="/assets/registerImage.svg"
                alt="Register Image"
              />
            </motion.div>
          </div>

          {!choosenOne && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center my-8 relative bg-transparent z-50"
            >
              <button
                onClick={() => {
                  setChoosenOne(true);
                  setSlietStudent(true);
                }}
                className="  my-8 sm:my-12 transition active:scale-95 active:shadow-inner shadow-lg px-6 py-3 bg-[#289CC0] font-semibold font-montserrat text-white text-lg rounded-lg w-3/4 sm:w-1/2 text-center cursor-pointer"
              >
                For Sliet Students
              </button>
              <button
                onClick={() => {
                  setChoosenOne(true);
                  setSlietStudent(false);
                }}
                className="my-8 sm:my-12 transition active:scale-95 active:shadow-inner shadow-lg px-6 py-3 bg-[#289CC0] font-semibold font-montserrat text-white text-lg rounded-lg w-3/4  sm:w-1/2 text-center cursor-pointer"
              >
                For other Participant
              </button>
            </motion.div>
          )}

          {choosenOne && (
            <div className="flex justify-center  lg:mt-16 relative bg-transparent z-50">
              <form className=" w-[90%]" onSubmit={(e) => e.preventDefault()}>
                <motion.div
                 initial={{ x: 100, opacity: 0 }} 
                 animate={{ x: 0, opacity: 1 }} 
                  transition={{ type: "spring", stiffness: 100, damping: 5 }}
                  className="border-[3px] border-[#00E9FF] p-4 mt-7 rounded-lg sm:p-12 sm:rounded-xl sm:m-3  "
                >
                  <div>
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Name
                    </label>
                    <div className="flex mt-2 font-sans text-[#151313]">
                      <input
                        className="w-1/2 mr-3 sm:mr-4 px-3 h-11 rounded-xl"
                        type="text"
                        placeholder="First Name"
                        required
                      />
                      <input
                        className="w-1/2 ml:3 sm:ml-4 px-3 h-11 rounded-xl"
                        type="text"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Contact Number
                    </label>
                    <div className="flex mt-2 font-montserrat  text-[#151313]">
                      <input
                        ref={contactNo}
                        className="w-full sm:w-1/2  px-3 h-11 rounded-xl appearance-none"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      College Name
                    </label>
                    <div className="flex mt-2 font-montserrat  text-[#151313]">
                      <input
                        className="w-full sm:w-1/2  px-3 h-11 rounded-xl appearance-none"
                        type="text"
                        value={slietStudent ? "SLIET" : ""}
                        disabled={slietStudent}
                        required
                      />
                    </div>
                  </div>

                  {slietStudent && (
                    <div className="w-full sm:w-1/2 mt-7">
                      <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                        Registration Number
                      </label>
                      <div className="flex mt-2 font-montserrat text-[#151313] w-full justify-center">
                        <input
                          ref={regNo}
                          className="w-full px-3 h-11 rounded-xl"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="w-full sm:w-1/2 mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Year of Graduation
                    </label>

                    <select
                      className="w-full px-3 h-11 rounded-xl bg-white text-black font-montserrat"
                      required
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-gray-500 font-montserrat"
                      >
                        Year of Graduation
                      </option>
                      {Object.entries(GraduationYear).map(([key, value]) => (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Email-id
                    </label>
                    <div className="flex mt-2 font-montserrat  text-[#151313]">
                      <input
                        className="w-full sm:w-1/2 px-3 h-11 rounded-xl appearance-none"
                        type="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Select the event you wish to participate
                    </label>
                    <select
                      className="block mt-5 w-full sm:w-1/2 px-3 h-11 rounded-xl bg-white text-black font-montserrat"
                      required
                    >
                      <option
                        value=""
                        disabled
                        selected
                        className="text-gray-500 font-montserrat"
                      >
                        Select Event
                      </option>
                      {events.map((event) => {
                        return <option key={event}>{event}</option>;
                      })}
                    </select>
                  </div>
                  <div className="w-full sm:w-1/2 mt-7">
                    <label className="font-montserrat text-white font-semibold ">
                      Team Name (if any)
                    </label>
                    <div className="flex mt-2 font-montserrat text-[#151313] w-full justify-center">
                      <input
                       
                        className="w-full px-3 h-11 rounded-xl"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  {!slietStudent && (
                    <div class="mt-7">
                      <p class="text-lg text-white font-montserrat font-semibold after:content-['*'] after:text-red-500">
                        Accomodation Required?
                      </p>

                      <div className="w-2/3 sm:w-1/4 flex justify-between mt-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="accomodation"
                            value="yes"
                            checked
                            className="w-4 h-4 border-gray-300 focus:ring-green-500"
                          />
                          <span className="text-white font-montserrat font-semibold">
                            Yes
                          </span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            value="no"
                            name="accomodation"
                            className="w-4 h-4 border-gray-300 focus:ring-green-500"
                          />
                          <span className="text-white font-montserrat font-semibold">
                            No
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  {!slietStudent && (
                    <div className="mt-7">
                      <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                        Upload Payment Screenshot of Registration Fee(@₹200) *
                      </label>

                      <label className=" block mt-5 px-1 py-1 bg-[#289CC0] font-montserrat text-white rounded-lg w-3/4 sm:w-1/5 text-center cursor-pointer  shadow-lg transition active:scale-95 active:shadow-inner font-semibold">
                        Upload Screenshot
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) => console.log(e.target.files[0])}
                        />
                      </label>
                    </div>
                  )}
                </motion.div>

                {!slietStudent && (
                  <div className="mt-7 font-montserrat text-white font-semibold flex justify-center">
                    <div>
                      Account details for payment
                      <br />
                      Name: MADHURAM-2025
                      <br />
                      Account no: 5770121283
                      <br />
                      IFSC code: CBIN0283105
                      <br />
                    </div>
                  </div>
                )}

                <div className="flex justify-center my-16">
                  <button
                    onClick={clickSubmission}
                    className="transition active:scale-95 active:shadow-inner shadow-lg px-6 py-3 bg-[#289CC0] font-semibold font-montserrat text-white text-lg rounded-lg w-1/2 sm:w-1/3 text-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
          <div
            className="w-full h-20 bg-repeat-x bg-[length:auto_100%] bg-top rotate-180"
            style={{
              backgroundImage: "url('/assets/UpperBanner.png')",
            }}
          ></div>
        </div>
        <Footer
          bgColor="#135871"
          bgLightColor="#FFFFFF"
          flowerImage={FlowerImage}
        />
      </div>
    </>
  );
};

export default Register;

const validateContact = (value) => {
  return /^\d{10}$/.test(value); // should be 10 digit phone number
};
const validateRegNo = (value) => {
  return /^\d{7}$/.test(value); // 7 digit regNo
};
