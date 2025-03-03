import React from "react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const scardData = [
    {
        title: "Aditya Mudgal",
        description: "GCS/2241032",
        image: "/assets/avatars/boy1.svg",
        color: "#34d8a1"
    },
    {
        title: "Arpan Kusum",
        description: "GCS/2231003",
        image: "/assets/avatars/boy2.svg",
        color: "#CF86E0"
    },
    {
        title: "Arpanveer Sidhu",
        description: "GCS/2241006",
        image: "/assets/avatars/boy1.svg",
        color: "#FAB483"
    },
    {
        title: "Drishty Priya",
        description: "GFT/2335073",
        image: "/assets/avatars/girl1.svg",
        color: "#5DC2EA"
    },
    {
        title: "Farhan Ali",
        description: "GCT/2332051",
        image: "/assets/avatars/boy7.svg",
        color: "#E17272"
    },
    {
        title: "Kishlay Raj",
        description: "GCS/2331004",
        image: "/assets/avatars/boy1.svg",
        color: "#E53253"
    },
    {
        title: "Parveen",
        description: "GCT/2242013",
        image: "/assets/avatars/boy1.svg",
        color: "#458CB2"
    },
    {
        title: "Prakhyat Prakhar",
        description: "GIN/2244218",
        image: "/assets/avatars/boy1.svg",
        color: "#34D8A1"
    },
    {
        title: "Priyanshu Deep",
        description: "GME/2336072",
        image: "/assets/avatars/boy1.svg",
        color: "#CF86E0"
    },
    {
        title: "Subham Singh",
        description: "GME/2436110",
        image: "/assets/avatars/boy1.svg",
        color: "#FAB483"
    },
    {
        title: "Sudhanshu Rajan",
        description: "GME/2336083",
        image: "/assets/avatars/boy1.svg",
        color: "#5DC2EA"
    },
    {
        title: "Urshita",
        description: "GCS/2331054",
        image: "/assets/avatars/girl1.svg",
        color: "#EEBD3D"
    }
];


function getTint(hex, percentage) {
    // Ensure hex is in the correct format
    hex = hex.replace(/^#/, '');

    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Calculate the new tinted color by blending with white
    r = Math.round(r + (255 - r) * (percentage / 100));
    g = Math.round(g + (255 - g) * (percentage / 100));
    b = Math.round(b + (255 - b) * (percentage / 100));

    // Convert back to hex
    let tintedHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    return tintedHex;
}


const Card = ({ title, description, image }) => {
    return (
        <div className="flex justify-center items-center h-auto min-h-[150px] p-1 sm:p-3">
  <div className="group w-36 sm:w-56 md:w-72 lg:w-80 border-2 border-white bg-gradient-to-b from-purple-600 to-purple-800 text-white rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">

   
    <div className="relative w-full h-28 sm:h-36 lg:h-56 overflow-hidden rounded-t-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-t-2xl shadow-md transition-all duration-300 ease-in-out group-hover:brightness-110"
      />
    </div>

  
    <div className="mt-0.5 sm:mt-2 md:mt-3 flex flex-col justify-center p-1 sm:p-2 md:p-3">
      <p className="italic text-[10px] sm:text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
      <h2 className="text-xs sm:text-lg font-bold mt-0.5 sm:mt-2 md:mt-3 group-hover:text-yellow-300 transition-colors duration-300">
        {title}
      </h2>
    </div>
  </div>
</div>



    );
};



const Viewdes = ({ title, description, image, color }) => {
    return (
        <>

            <div className='group bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl shadow-lg w-80 text-center  transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out mt-4 mb-4 ' style={{ width: 300, height: 300, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex', }}>

                <div style={{ height: 300, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>

                    <div style={{ width: 300, height: 300.73, position: 'relative' }}>
                        <div style={{ width: 300, height: 300, left: 0, top: 0, position: 'absolute', borderRadius: 20, border: `5px ${color} solid`, backgroundColor: getTint(color, 75) }}>
                            <img className="scard" src={image} alt={title} style={{ width: 200, height: 200, borderRadius: 100, transform: 'translate(40px,17px)', padding: '0', }} />

                        </div>
                        <div style={{ width: 300, height: 121.71, left: 0, top: 179.02, position: 'absolute', display: 'flex', justifyContent: 'center' }}>
                            <div data-svg-wrapper style={{ left: 0, top: 43.50, position: 'absolute' }}>
                                <svg width="300" height="79" viewBox="0 0 300 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 30.1465C0 13.5779 13.4315 0.146484 30 0.146484H300V58.365C300 69.4107 291.046 78.365 280 78.365H20C8.9543 78.365 0 69.4107 0 58.365V30.1465Z" fill={color} />
                                </svg>
                            </div>
                            <div data-svg-wrapper style={{ left: 270.19, top: 0, position: 'absolute' }}>
                                <svg width="30" height="45" viewBox="0 0 30 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.192383 44.1461H30V0.816244C30 0.760843 29.9999 0.705477 29.9996 0.650146V14.1467C29.9996 30.6509 16.6722 44.0424 0.192383 44.1461Z" fill={color} />
                                </svg>
                            </div>
                            <div style={{ top: 51.98, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', textShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)' }}>{title}</div>
                            <div style={{ left: 90, top: 91.98, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textShadow: '0px 0px 11px rgba(0, 0, 0, 0.25)' }}>{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const Viewmob = ({ title, description, image, color }) => {
    return (
        <div className="from-purple-600 to-purple-800 text-white rounded-2xl shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out" style={{ width: 121, height: 127.48, position: 'relative' }}>
            <div style={{ width: 60.50, height: 125.32, left: 0, top: 2.16, position: 'absolute', background: '#D9D9D9', borderRadius: 12 }} />
            <div style={{ width: 60.50, height: 125.32, left: 60.50, top: 2.16, position: 'absolute', background: `${color}`, borderRadius: 12 }} />
            <div style={{ width: 121, height: 79.95, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderTopLeftRadius: 12, borderTopRightRadius: 12, borderBottomRightRadius: 12 }} />
            <div style={{ width: 119.92, height: 47.54, left: 0, top: 79.95, position: 'absolute', background: `${color}`, borderRadius: 12 }} />
            <div style={{ width: 121, height: 127.48, left: 0, top: 0, position: 'absolute', borderRadius: 12, border: `3px ${color} solid` }} />
            <div style={{ width: 86.43, height: 16.21, left: 17.29, top: 87.51, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>{title}</div>
            <div style={{ width: 71.30, height: 12.96, left: 24.85, top: 105.88, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 9, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{description}</div>
            <div style={{ width: 78.05, height: 78.05, left: 21.29, top: 2.37, position: 'absolute', background: '#d9d9d9', borderRadius: 9999 }} >
                <img src={image} alt="" style={{ borderRadius: 999 }} />
            </div>


        </div>
    )
}

function Scard({ title, description, image, color, width }) {
    let render = true;
    if (width < 600) { render = false; }
    return (
        <>
            {render ? <Viewdes title={title} description={description} image={image} color={color} /> : <Viewmob title={title} description={description} image={image} color={color} />}
        </>

    );
}


const Faculty = ({ width }) => {
    let render = true;
    if (width < 600) render = false;

    return (
        <>

            <div className="flex justify-center   ">
                <div className=" p-4 text-white">
                    <img src="/assets/faculty.svg" alt="" />
                </div>
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-8 justify-evenly mt-20 mb-20" >
                <Card
                    title="Dr. Mani Kant Paswan"
                    description="Patron-in-Chief"
                    image="/assets/director-team.jpg"
                />
                <Card
                    title="Prof. M. M. Sinha"
                    description="Patron"
                    image="/assets/avatars/dean.jpg"
                />
                <Card
                    title="Prof. Indraj Singh"
                    description="Chairman, Madhuram’25"
                    image="/assets/avatars/indraj.jpg"
                />
                <Card
                    title="Dr.Gurjinder Kaur"
                    description="Vice-Chairman, Madhuram’25"
                    image="/assets/gurjinder.png"
                />

                <Card
                    title="Dr. Vivek Kumar"
                    description="Vice-Chairman, Madhuram’25"
                    image="/assets/vivek.png"
                />


            </div>

        </>
    )

}





const Coordinators = ({ width }) => {
    let render = true;
    if (width < 600) {
        render = false;
    }

    return (
        <>
            <div className="mt-20 mb-20 transform lg:translate-x-10 sm:-translate-x-20">
                <img src='/assets/coord.svg' />
            </div>

            <div className="scards flex flex-wrap  justify-around sm:justify-around gap-5" >
                {scardData.map((scard, index) => (
                    <Scard
                        key={index}
                        title={scard.title}
                        description={scard.description}
                        image={scard.image}
                        color={scard.color}
                        width={width}
                    />
                ))}
            </div>
        </>
    )

}

const Pattern = ({ rotate }) => {
    if (rotate === 'true') {
        return (
            <>
                <div style={{ display: 'flex', overflow: 'hidden' }} className="pattern">
                    <img src="/assets/patter-group.jpg" style={{ transform: 'rotate(180deg)' }} />
                </div>
            </>)
    }
    else
        return (
            <>
                <div style={{ display: 'flex', overflow: 'hidden' }} className="pattern">
                    <img src="/assets/patter-group.jpg" />
                </div>
            </>
        )
}

function Team() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener when component unmounts
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full" style={{ backgroundColor: "#734297" }}>
            <Header />
            <Pattern rotate='false' />
            <div className="container mx-auto px-4 py-8 lg:py-16">

                <Faculty width={width} />
                <Coordinators width={width} />

            </div>
            <Pattern rotate='true' />
            <Footer bgColor="#754399" bgLightColor="#FFFFFF" flowerImage='/assets/flower-team.png' />
        </div>
    );
}

export default Team;
