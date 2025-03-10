import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowerImage from "/assets/registerFooterFlower.svg";

const Guidelines = () => {
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
          </div>
          <div className="h-72 w-screen  flex items-center justify-center text-white font-bold text-3xl">
            Coming Soon...
          </div>
        </div>
        <div
          className="w-full h-20 bg-repeat-x bg-[length:auto_100%] bg-top rotate-180"
          style={{
            backgroundImage: "url('/assets/UpperBanner.png')",
          }}
        ></div>

        <Footer
          bgColor="#135871"
          bgLightColor="#FFFFFF"
          flowerImage={FlowerImage}
        />
      </div>
    </>
  );
};

export default Guidelines;
