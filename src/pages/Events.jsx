import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import header from '/assets/events/header.png';
import events from '/assets/events/events.png';
import duet from '/assets/events/dance/duet.png';

import song1 from '/assets/events/singing/male.png';
import song2 from '/assets/events/singing/female.png';

import band1 from '/assets/events/band/first.png';
import band2 from '/assets/events/band/second.png';

import drama1 from '/assets/events/drama/first.png';
import drama2 from '/assets/events/drama/second.png';

import rapping1 from '/assets/events/rapping/first.png';
import rapping2 from '/assets/events/rapping/second.png';

import standup1 from '/assets/events/standup/first.png';
import standup2 from '/assets/events/standup/second.png';

import nukkad1 from '/assets/events/nukkad/first.png';
import nukkad2 from '/assets/events/nukkad/second.png';

import mono1 from '/assets/events/mono-acting/first.png';
import mono2 from '/assets/events/mono-acting/second.png';

import poetry1 from '/assets/events/poetry/first.png';
import poetry2 from '/assets/events/poetry/second.png';

import modelling1 from '/assets/events/modeling/first.png';
import modelling2 from '/assets/events/modeling/second.png';

import choreography1 from '/assets/events/choreography/first.png';
import choreography2 from '/assets/events/choreography/second.png';

import beatboxing1 from '/assets/events/beatboxing/first.png';
import beatboxing2 from '/assets/events/beatboxing/second.png';

import Bhangra from '/assets/events/bhangra.png';
import Bhangra1 from '/assets/events/bhangra-1.png';

import Footer from '@/components/Footer';
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";



const Events = () => {
    const eventsRef = useRef(null);
    const isEventsInView = useInView(eventsRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-texture-events relative text-white w-full flex flex-col overflow-hidden">
            {/* Header with Parallax Effect */}
            <Navbar  />
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-row w-full h-12 lg:h-auto overflow-hidden"
            >
                <img src={header} alt="header image" className="w-auto" />
                <img src={header} alt="header image" className="w-auto" />
                <img src={header} alt="header image" className="w-auto" />
                <img src={header} alt="header image" className="w-auto" />
            </motion.header>

            {/* Events Header Image with Scaling Effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full flex flex-col items-center justify-center py-16"
            >
                <img src={events} alt="events header" className="w-64 md:w-96" />
            </motion.div>

            {/* Events List with Staggered Animation */}
            <motion.div
                ref={eventsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="w-full flex flex-col h-auto items-center justify-between py-16 bg-transparent z-50   "
            >
                <div className="md:w-10/12 w-11/12 flex flex-row flex-wrap items-center justify-between">
                    {eventData.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isEventsInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col md:w-1/2 h-auto md:px-16 px-4 relative md:mb-32 mb-24"
                        >
                            <motion.img
                                initial={{ x: -30, opacity: 0 }}
                                animate={isEventsInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                src={event.leftImage}
                                alt={event.title}
                                className="md:w-44 w-28 flex absolute md:-top-24 -top-16 md:-left-0 -left-4 -rotate-12 z-10"
                            />
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="bg-[#267A62] w-full md:h-16 h-12 rounded-full border-2 border-[#89C990] flex items-center justify-center text-center text-white font-bold md:text-3xl text-lg montserrat--font"
                            >
                                {event.title}
                            </motion.div>
                            <motion.img
                                initial={{ x: 30, opacity: 0 }}
                                animate={isEventsInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                src={event.rightImage}
                                alt={event.title}
                                className="md:w-44 w-28 flex absolute md:-top-24 -top-16 md:-right-4 -right-6 z-10 rotate-12"
                            />
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isEventsInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.4 }}
                                className="px-5 pt-2 noto--font md:text-left text-center"
                            >
                                {event.description}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div>
                    <button className="bg-[#267A62] w-full md:h-16 h-12 rounded-full border-2 border-[#89C990] flex items-center justify-center text-center text-white font-bold md:text-3xl text-lg montserrat--font px-12">
                        <Link to="/guidelines"> Event Guidelines</Link>
                    </button>
                </motion.div>

                <div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={isEventsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-white text-2xl lg:text-5xl font-montserrat font-bold text-center  mt-10"
                    >
                        Register Now! Win prizes upto <span className="text-[#fff]"> ₹1,50,000</span>
                    </motion.h1>
                </div>
            </motion.div>

            {/* Footer Header with Fade-in */}
            <motion.header
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="flex flex-row w-full overflow-hidden"
            >
                <img src={header} alt="header image" className="w-auto rotate-180" />
                <img src={header} alt="header image" className="w-auto rotate-180" />
                <img src={header} alt="header image" className="w-auto rotate-180" />
                <img src={header} alt="header image" className="w-auto rotate-180" />
            </motion.header>

            {/* Footer */}
            <Footer bgColor="#CB3541" bgLightColor="#FFFFFF" flowerImage="/assets/flower-team.png" />
        </div>
    );
};


export default Events

const eventData = [
    {
        title: 'Bhangra',
        description: "Experience the electrifying energy of Bhangra at Madhuram’25, SLIET! Join us for an unforgettable celebration of Punjabi culture and dance!",
        leftImage: Bhangra1 ,
        rightImage: Bhangra
    },
    {
        title: 'Singing (Solo/Duet/Group)',
        description: "From soulful ballads to electrifying performances, our stage will be a symphony of talent to showcase your inner musical aura.",
        leftImage: song1,
        rightImage: song2
    },
    {
        title: 'Band Performance',
        description: "Step into the spotlight as bands from far and wide unite to rock the stage in an electrifying showdown.",
        leftImage: band1,
        rightImage: band2
    },
    {
        title: 'Drama / Skit',
        description: "Prepare for an evening of storytelling and creativity as talented actors take center stage in our drama/skit competition",
        leftImage: drama1,
        rightImage: drama2
    },
    {
        title: 'Rapping',
        description: "Rapping is a rhythmic art form of spoken word,with lyrics that flow and stories to be heard.",
        leftImage: rapping1,
        rightImage: rapping2
    },
    {
        title: 'Stand-Up Comedy',
        description: "Stand-up comedy is a live performance art with blend of wit, satire and relatable humor to make the audience laugh while poking fun at societal quirks.",
        leftImage: standup1,
        rightImage: standup2
    },
    {
        title: 'Nukkad Natak',
        description: "Nukkad Natak is a form of street play in India, combining drama and social messages performed in public spaces.",
        leftImage: nukkad1,
        rightImage: nukkad2
    },
    {
        title: 'Mono-acting',
        description: "Mono acting is a captivating form of drama that relies on the actor's versatility and skill to engage the audience in a compelling narrative.",
        leftImage: mono1,
        rightImage: mono2
    },
    {
        title: 'Poetry / Storytelling',
        description: "Poetry and storytelling, like two kindred spirits paint the canvas of human expression, offering solace, inspiration, and a window into the depths of the human soul.",
        leftImage: poetry1,
        rightImage: poetry2
    },
    {
        title: 'Modelling',
        description: "Modeling involves striking poses, walking the runway, or participating in photoshoots, often requiring a combination of physical attributes and charisma.",
        leftImage: modelling1,
        rightImage: modelling2
    },
    {
        title: 'Dance (Solo/Duet/Group',
        description: "Embrace the rich cultural tapestry through captivating folk dance to Rhythmic, expressive, and dynamic moves that'll leave all of you in awe.",
        leftImage: choreography1,
        rightImage: choreography2
    },
    {
        title: 'Beatboxing',
        description: "A musical drumming performance without actual drums, relying solely on vocal skills and creativity solely devoted to bringing out the vocal artistry.",
        leftImage: beatboxing1,
        rightImage: beatboxing2
    },
];
