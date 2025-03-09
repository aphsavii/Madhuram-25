import React from "react";
import BgImage from "/assets/image244.png";
import Director from "/assets/director-team.jpg";
import MMSinha from "/assets/avatars/dean.jpg";
import Indra from "/assets/avatars/indraj.jpg";
import Gurjinder from "/assets/gurjinder.jpeg";
import Vivek from "/assets/avatars/vivek.jpeg";

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
      description: `This event is a reflection of our vibrant student community. Your enthusiasm and dedication make it special. Let's create an atmosphere of joy, togetherness, and inspiration. Wishing you all a fantastic fest! <br>
        <span class="font-medium font-poppins text-xs lg:mt-2">mail: indrarajsliet@yahoo.co.in <br>
        contact: 9417460331</span>
        `,
    },
    {
      name: "Dr. Gurjinder Kaur",
      role: "Vice Chairman, Madhuram'25",
      image: Gurjinder,
      description:
        "Madhuram'25 is a wonderful platform for students to showcase their talent, creativity, and passion. I encourage everyone to participate wholeheartedly, and make this fest a truly memorable celebration!",
    },
    {
      name: "Dr. Vivek Kumar",
      role: "Vice Chairman, Madhuram'25",
      image: Vivek,
      description:
        "Our cultural fest reflects our vibrant student community, where talent meets enthusiasm. Let’s come together to celebrate creativity, forge new friendships, and create lasting memories.",
    },
  ];

  return (
    <section className="md:py-6 py-0 text-center">
      <div className="flex flex-wrap justify-center lg:px-20 mt-4 md:gap-9 gap-3">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative transition-transform duration-300ms hover:scale-105"
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
              className="md:w-full h-full w-[77%] mx-auto object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4  mx-auto md:w-4/6 w-3/5">
              <img
                src={member.image}
                alt={member.name}
                className="md:w-32 md:h-32 w-16 h-16 rounded-full border-2 object-cover border-white shadow-lg"
              />
              <h3 className="font-bold mt-2 text-[#1F3765] font-lobster">
                {member.name}
              </h3>
              <p className="font-bold text-sm text-[#1F3765] font-lobster">
                {member.role}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: member.description }}
                className="mt-2 text-xs text-black  font-poppins"
              ></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
