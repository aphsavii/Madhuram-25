import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerImage from "/assets/registerFooterFlower.svg";
import { gfurl1, gfurl2 } from "@/lib/constatnts";

const Register = () => {
  const [accomodation, setAccomodation] = useState("");
  const [choosenOne, setChoosenOne] = useState(false);
  const [imageName, setImageName] = useState("");
  const [viewLink, setViewLink] = useState("");
  const [imageLoadingText, setImageLoadingText] = useState("Upload screenshot");
  const [payment, setPayment] = useState("null");
  const [submissionLoader, setSubmissionLoader] = useState(false);
  const [submissionText, setSubmissionText] = useState("Submit");

  const fname = useRef(null);
  const sname = useRef(null);
  const contactNo = useRef(null);
  const collegeName = useRef("");

  const yearOfGraduation = useRef(null);
  const emailId = useRef(null);
  const eventChoosen = useRef(null);
  const team = useRef(null);
  const paymentStatus = useRef(null);

  const validateContact = (value) => {
    return /^\d{10}$/.test(value);
  };

  const validateEmail = (value) => {
    return /@/.test(value);
  };

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
    "Solo Singing",
    "Duet Singing",
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
    "dancing",
  ];

  const clickSubmission = async () => {
    const formData = {
      Name: fname.current.value + " " + sname.current.value,
      Contact: contactNo.current.value,
      College: collegeName.current.value,
      email: emailId.current.value,
      Year_of_Graduation: yearOfGraduation.current.value,
      Team_Name: team.current.value || "null",
      eventParticipation: eventChoosen.current.value,
      accomodation: accomodation,
      payment: payment,
    };

    if (!validateContact(contactNo.current.value)) {
      alert("Please Enter a Valid 10 digit Contact Number");
      return;
    }

    if (!validateEmail(emailId.current.value)) {
      alert("Please Enter a valid email adress");
    }
    if (!viewLink) {
      alert("Please Upload the Payment Screenshot first");
      return;
    }
    setSubmissionLoader(true);

    try {
      const res = await fetch(
        "https://ancient-moon-7b80.aphsavii.workers.dev/",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setSubmissionText("Successfull Submission");
    } catch (err) {
      alert("There was an Error while Submission , Please Try Again");
    } finally {
      setSubmissionLoader(false);
      fname.current.value = "";
      sname.current.value = "";
      contactNo.current.value = "";

      collegeName.current.value = "";
      emailId.current.value = "";
      yearOfGraduation.current.value = "";
      team.current.value = "";
      eventChoosen.current.value = "";
      setPayment("null");
      setViewLink("");
      paymentStatus.current.value = "";
      setImageName("");
    }
  };

  const handleUploadImage = async () => {
    const image = paymentStatus.current.files[0];

    if (!image) {
      alert("Please select an image before uploading.");
      setImageName("");
      return;
    }
    setImageName(image.name);
    setImageLoadingText("Uploading...");

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "madhuram");
    data.append("cloud_name", "dittkadrp");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dittkadrp/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        throw new Error(`Upload failed with status: ${res.status}`);
      }

      const result = await res.json();
      setViewLink(result.url);
      setPayment(result.url);
    } catch (err) {
      setImageName("");
      alert("Some Error occurred while uploading Payment screenshot.");
    } finally {
      paymentStatus.current.value = "";

      setImageLoadingText("Upload screenshot");
    }
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
              transition={{ duration: 0.5 }}
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
                className="w-48 md:w-96 m-1"
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
                  window.open(gfurl1, "_blank");
                }}
                className="  my-8 sm:my-12 transition active:scale-95 active:shadow-inner shadow-lg px-6 py-3 bg-[#289CC0] font-semibold font-montserrat text-white text-lg rounded-lg w-3/4 sm:w-1/2 text-center cursor-pointer"
              >
                For Sliet Students
              </button>
              <button
                onClick={() => {
                  window.open(gfurl2, "_blank");
                }}
                className="  my-8 sm:my-12 transition active:scale-95 active:shadow-inner shadow-lg px-6 py-3 bg-[#289CC0] font-semibold font-montserrat text-white text-lg rounded-lg w-3/4 sm:w-1/2 text-center cursor-pointer"
              >
                SLIET Bhangra Cup
              </button>
              <button
                onClick={() => {
                  setChoosenOne(true);
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
                  transition={{ type: "spring", stiffness: 100, damping: 8 }}
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
                        ref={fname}
                      />
                      <input
                        className="w-1/2 ml:3 sm:ml-4 px-3 h-11 rounded-xl"
                        type="text"
                        placeholder="Last Name"
                        required
                        ref={sname}
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
                        ref={collegeName}
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Year of Graduation
                    </label>

                    <select
                      className="w-full px-3 h-11 rounded-xl bg-white text-black font-montserrat"
                      required
                      ref={yearOfGraduation}
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
                        ref={emailId}
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
                      ref={eventChoosen}
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
                        ref={team}
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-lg text-white font-montserrat font-semibold after:content-['*'] after:text-red-500">
                      Accomodation Required?
                    </p>

                    <div className="w-2/3 sm:w-1/4 flex justify-between mt-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="accomodation"
                          value="yes"
                          onClick={() => setAccomodation("No")}
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
                          onClick={() => setAccomodation("No")}
                        />
                        <span className="text-white font-montserrat font-semibold">
                          No
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mt-7">
                    <label className="font-montserrat text-white font-semibold after:content-['*'] after:text-red-500">
                      Upload Payment Screenshot of Registration Fee(@₹100) *
                    </label>

                    <label
                      className={`block mt-5 px-1 py-1 bg-[#289CC0] font-montserrat text-white rounded-lg w-3/4 sm:w-1/5 text-center cursor-pointer  shadow-lg transition active:scale-95 active:shadow-inner font-semibold ${
                        viewLink ? "pointer-events-none opacity-50" : ""
                      }`}
                    >
                      {imageLoadingText}
                      <input
                        ref={paymentStatus}
                        type="file"
                        className="hidden"
                        onChange={handleUploadImage}
                      />
                    </label>
                    <div className="my-2">
                      <span className="text-white font-semibold mx-2">
                        {imageName}
                      </span>
                      <span
                        className="text-white font-semibold mx-2 cursor-pointer "
                        onClick={() => window.open(viewLink, "_blank")}
                      >
                        {viewLink ? "view" : ""}
                      </span>
                    </div>
                  </div>
                </motion.div>

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

                <div className="flex justify-center my-16">
                  <button
                    onClick={clickSubmission}
                    className={`transition active:scale-95 active:shadow-inner shadow-lg px-6 py-3 bg-[#289CC0] font-semibold font-montserrat text-white text-lg rounded-lg w-1/2 sm:w-1/3 text-center ${
                      submissionText === "Successfull Submission"
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    {submissionText}
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
        {submissionLoader && (
          <div className="fixed z-[100] inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex space-x-3">
                <motion.div
                  className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                  animate={{ y: [-10, -20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="w-6 h-6 bg-gradient-to-br from-green-400 to-yellow-500 rounded-full"
                  animate={{ y: [-10, -30, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                ></motion.div>
                <motion.div
                  className="w-6 h-6 bg-gradient-to-br from-red-400 to-pink-500 rounded-full"
                  animate={{ y: [-10, -40, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                ></motion.div>
              </div>

              <p className="mt-4 text-white text-lg font-semibold animate-pulse">
                Submitting...
              </p>
            </motion.div>
          </div>
        )}
        <Footer
          bgColor="#135871"
          bgLightColor="#FFFFFF"
          flowerImage={FlowerImage}
        />
      </div>
    </>
  );
};

const validateContact = (value) => {
  return /^\d{10}$/.test(value); // should be 10 digit phone number
};

const validateEmail = (value) => {
  return /@/.test(value);
};

export default Register;
