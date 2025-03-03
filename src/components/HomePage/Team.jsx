import React from "react";
import BgImage from "/assets/image244.png";
import Director from "/assets/director.png"

const Team = () => {
  const members = [
    {
      name: "Professor Manikant Paswan",
      role: "Director",
      image: Director,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Professor M. M. Sinha",
      role: "Dean (Student Welfare)",
      image: Director,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Dr. Indraj Singh",
      role: "Chairman, Madhuram'25",
      image: Director,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <section className="py-8 text-center">
      <div className="flex justify-center space-x-4 mt-4 gap-9">
        {members.map((member, index) => (
          <div key={index} className="relative">
            <img
              src={BgImage}
              className="w-full h-full object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 mx-auto w-4/6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-2 border-white shadow-lg"
              />
              <h3 className="font-bold mt-2 text-[#1F3765] font-lobster">{member.name}</h3>
              <p className="font-bold text-sm text-[#1F3765] font-lobster">{member.role}</p>
              <p className="mt-2 text-xs text-black font-poppins">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
