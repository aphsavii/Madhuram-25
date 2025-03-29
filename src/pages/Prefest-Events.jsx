import React from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';

import header from '/assets/events/header.png';

const PrefestEvents = () => {
    return (
        <div className="bg-texture-events relative text-white w-full flex flex-col items-center justify-center overflow-hidden">
            <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <Navbar />
            </motion.div>

            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-row w-full h-12 lg:h-auto overflow-hidden"
            >
                {[...Array(4)].map((_, i) => (
                    <img key={i} src={header} alt="header image" className="w-auto" />
                ))}
            </motion.header>

            <h1 className='w-full flex md:text-7xl text-4xl font-semibold py-8 items-center justify-center'>Prefest Events</h1>

            <div className="md:w-10/12 w-11/12 flex flex-col gap-6 text-center pb-12">
                {events.map((item, index) => (
                    <div key={index} className="p-4">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-[#267A62] w-full h-16 rounded-full border-2 border-[#89C990] flex items-center justify-center text-center text-white font-bold md:text-3xl text-lg px-4 md:py-0 py-2 montserrat--font mb-3"
                        >
                            {item.title}
                        </motion.div>
                        <div className='text-2xl font-bold montserrat--font'>
                            <p className="text-lg">Date: {item.date}</p>
                            <p className="text-lg">Time: {item.time}</p>
                            {item.venue && <p className="text-lg">Venue: {item.venue}</p>}
                            <p className="text-lg">{item.metadata}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrefestEvents;

const events = [
    {
        title: "Hollywood Beats and colorful feats",
        date: "14 March",
        time: "10am",
        venue: "Basketball Court"
    },
    {
        title: "Cinema Dhamaal",
        date: "22 March",
        time: "2:30pm",
        venue: "Main Auditorium"
    },
    {
        title: "Treasure Trove",
        date: "23 March",
        time: "10am",
        venue: "Fete Area",
        metadata: "Stages: 3"
    },
    {
        title: "Quiz Carnival",
        date: "26 March",
        time: "4:45pm",
        venue: "MPH (Tentative)",
        metadata: "Topic: Cultural Diversity"
    },
    {
        title: "Chair-O-Menia (Musical Chair)",
        date: "30 March",
        time: "4pm",
        venue: "SAC"
    },
    {
        title: "Brant Vision (Poster Making)",
        date: "31 March",
        time: "4:30pm",
        venue: "Online",
        metadata: "Theme: Diversity of Culture"
    },
    {
        title: "Aawaz (Open Mic, Jam Session, Nukkad Natak)",
        date: "1 April",
        time: "4:30pm"
    },
    {
        title: "Street Vibes (Flash Mob Bollywood Dress)",
        date: "2 April",
        time: "4pm",
        venue: "SAC"
    },
    {
        title: "Rangoli Competitions",
        date: "3 April",
        time: "3:30pm",
        venue: "Fete Area",
        metadata: "Duration: 2 Hours"
    },
    {
        title: "Flag Off Event",
        date: "TBD",
        time: "11am",
        venue: "ISTE Hall",
        metadata: "Description: Dance competitions & all screened-out teams from any domain invited, then open for all."
    }
];