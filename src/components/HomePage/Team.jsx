import React from "react";
import BgImage from "/assets/image244.png";
import Director from "/assets/director.png";
import MMSinha from "/assets/mmsinha.png";
import Indra from "/assets/indraj.png";

const Team = () => {
  const members = [
    {
      name: "Professor Manikant Paswan",
      role: "Director",
      image: Director,
      description:
        "Our cultural fest is a celebration of creativity, talent, and unity. I encourage every student to participate, express themselves, and make unforgettable memories. Let's make this event a grand success!",
    },
    {
      name: "Professor M. M. Sinha",
      role: "Dean (Student Welfare)",
      image: MMSinha,
      description:
        "Beyond academics, cultural activities shape our personalities and bring us together as a community. I urge you all to immerse yourselves in the joy of art, music, and expression. Enjoy every moment!",
    },
    {
      name: "Dr. Indraj Singh",
      role: "Chairman, Madhuram'25",
      image: Indra,
      description:
        "This event is a reflection of our vibrant student community. Your enthusiasm and dedication make it special. Let's create an atmosphere of joy, togetherness, and inspiration. Wishing you all a fantastic fest!",
    },
  ];
  return (
    <section className="md:py-6 py-0 text-center">
      <div className="flex justify-center space-x-4 mt-4 md:gap-9 gap-3 flex-col md:flex-row ">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative transition-transform duration-300 hover:scale-105"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 0%, 112% 52%, 90% 90%, 40% 100%, 0% 90%, -16% 100%, 0% 0%)",
              WebkitClipPath:
                "polygon(50% 0%, 100% 0%, 112% 52%, 90% 90%, 40% 100%, 0% 90%, -16% 100%, 0% 0%)",
              filter: "drop-shadow(0px 8px 12px rgba(0,0,0,0.75))",
            }}
          >
            <img
              src={BgImage}
              className="md:w-full md:h-full w-[70%] h-3/5 mx-auto object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 mx-auto md:w-4/6 w-3/5">
              <img
                src={member.image}
                alt={member.name}
                className="md:w-32 md:h-32 w-16 h-16 rounded-full border-2 border-white shadow-lg"
              />
              <h3 className="font-bold mt-2 text-[#1F3765] font-lobster">
                {member.name}
              </h3>
              <p className="font-bold text-sm text-[#1F3765] font-lobster">
                {member.role}
              </p>
              <p className="mt-2 text-xs text-black font-poppins">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
