import { useState, useRef } from "react";

const Register = () => {
  const [slietStudent, setSlietStudent] = useState(true);
  const contactNo = useRef(null);
  const regNo = useRef(null);

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
    <div className="bg-[#135871] h-[100%] w-full">
      <div className="flex flex-col items-center">
        <img
          className="h-16 border border-black object-cover"
          src="/assets/UpperBanner.png"
          alt="Upper Banner"
        />
        <imgnpm ru
          className="h-10 sm:h-20 m-1"
          src="/assets/registerImage.svg"
          alt="Register Image"
        />
      </div>

      <div className="flex justify-center mt-12">
        <form className=" w-[90%]" onSubmit={(e) => e.preventDefault()}>
          <div className="mt-7">
            <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
              Name
            </label>
            <div className="flex mt-2 font-serif  text-[#151313]">
              <input
                className="w-1/2 mr-3 sm:mr-4 px-3 h-9 rounded-xl"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="w-1/2 ml:3 sm:ml-4 px-3 h-9 rounded-xl"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="mt-7">
            <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
              Contact Number
            </label>
            <div className="flex mt-2 font-serif  text-[#151313]">
              <input
                ref={contactNo}
                className="w-full sm:w-1/2  px-3 h-9 rounded-xl appearance-none"
                type="text"
                required
              />
            </div>
          </div>

          <div className="mt-7">
            <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
              College Name
            </label>
            <div className="flex mt-2 font-serif  text-[#151313]">
              <input
                className="w-full sm:w-1/2  px-3 h-9 rounded-xl appearance-none"
                type="text"
                required
              />
            </div>

            <div class="mt-7">
              <p class="text-lg text-white font-serif font-semibold">
                Are you a SLIET student?
              </p>

              <div className="w-2/3 sm:w-1/4 flex justify-between mt-3">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="slietStudent"
                    value="yes"
                    checked={slietStudent == true}
                    onClick={() => setSlietStudent(true)}
                    class="w-4 h-4 border-gray-300 focus:ring-green-500"
                  />
                  <span class="text-white font-serif font-semibold">Yes</span>
                </label>
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="slietStudent"
                    value="no"
                    class="w-4 h-4 border-gray-300 focus:ring-green-500"
                    checked={slietStudent == false}
                    onClick={() => setSlietStudent(false)}
                  />
                  <span class="text-white font-serif font-semibold">No</span>
                </label>
              </div>
            </div>
            {slietStudent && (
              <div>
                <div className="w-full sm:w-1/2 mt-7">
                  <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
                    Registration Number
                  </label>
                  <div className="flex mt-2 font-serif text-[#151313] w-full justify-center">
                    <input
                      ref={regNo}
                      className="w-full px-3 h-9 rounded-xl"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mt-7">
                  <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
                    Department
                  </label>

                  <select
                    className="w-full px-3 h-9 rounded-xl bg-white text-black font-serif"
                    required
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-500 font-serif"
                    >
                      Select Department
                    </option>
                    <option value="CSE" className=" text-black font-serif">
                      Computer Science and Engineering
                    </option>
                    <option value="EC" className=" text-black font-serif">
                      Electronics and Communication Engineering
                    </option>
                    <option value="EE" className=" text-black font-serif">
                      Electrical Engineering
                    </option>
                    <option value="IN" className=" text-black font-serif">
                      Instrumentation Engineering
                    </option>
                    <option value="ME" className=" text-black font-serif">
                      Mechanical Engineering
                    </option>
                    <option value="FT" className=" text-black font-serif">
                      Food Technology
                    </option>
                    <option value="CT" className=" text-black font-serif">
                      Chemical Technology
                    </option>
                    <option value="Civil" className=" text-black font-serif">
                      Civil Engineering
                    </option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="w-full sm:w-1/2 mt-7">
            <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
              Department
            </label>

            <select
              className="w-full px-3 h-9 rounded-xl bg-white text-black font-serif"
              required
            >
              <option
                value=""
                disabled
                selected
                className="text-gray-500 font-serif"
              >
                Year of Graduation
              </option>
              <option value="2024" className=" text-black font-serif">
                2024
              </option>
              <option value="2025" className=" text-black font-serif">
                2025
              </option>
              <option value="2026" className=" text-black font-serif">
                2026
              </option>
              <option value="2027" className=" text-black font-serif">
                2027
              </option>
              <option value="2028" className=" text-black font-serif">
                2028
              </option>
            </select>
          </div>
          <div className="mt-7">
            <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
              College Email-id
            </label>
            <div className="flex mt-2 font-serif  text-[#151313]">
              <input
                className="w-full sm:w-1/2 px-3 h-9 rounded-xl appearance-none"
                type="text"
                required
              />
            </div>
          </div>
          <div className="mt-7">
            <label className="font-serif text-white font-semibold after:content-['*'] after:text-red-500">
              Where did you hear about the event?
            </label>
            <div className="flex mt-2 font-serif  text-[#151313]">
              <input
                className="w-full sm:w-1/2  px-3 h-9 rounded-xl appearance-none"
                type="text"
                required
              />
            </div>
          </div>

          <div className="flex justify-center my-16">
            <button
              onClick={clickSubmission}
              className="px-6 py-3 bg-[#289CC0] font-semibold font-serif text-white text-lg rounded-lg w-1/2 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

const validateContact = (value) => {
  return /^\d{10}$/.test(value); // should be 10 digit phone number
};
const validateRegNo = (value) => {
  return /^\d{7}$/.test(value); // 7 digit regNo
};
