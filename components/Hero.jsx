import { useState } from "react";
import axios from "axios";
import Image from "next/image";

import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import MacBarSrc from "../public/images/zkmaruu.png";

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };

  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-10 backdrop-blur-[200px]" />
      <div className="md:-left-[28rem] -left-40 -top-40 md:-top-[28rem] bg-neon-red absolute opacity-80 dark:opacity-60 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="md:-right-[28rem] -right-40 -bottom-40 md:-bottom-[28rem] bg-neon-amber absolute opacity-30 dark:opacity-60 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="relative z-20 px-12 py-24 mx-auto flex flex-col max-w-7xl items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 md:flex-row">
        <div
          className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
          aria-hidden="true"
        >
          <ScatteredSpheres />
        </div>
        {/* Text */}
        <div className="z-10 flex flex-col gap-4 text-center md:text-left">
          <h1
            data-aos="zoom-y-out"
            className="text-5xl font-bold leading-tight tracking-tighter text-gray-800 md:text-7xl dark:text-gray-100"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-red">
              zkSharu{" "}
            </span>
            <br />
            Invest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-red">
              Safer.
            </span>
          </h1>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg text-gray-600 md:text-xl dark:text-gray-400"
          >
            Sharu born with his vision to bring goodness to the zkSync ecosystem, Sharu will invade the entire crypto space.</p>
          <div
            className="flex flex-col"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-white rounded-lg shadow-md bg-gradient-to-r from-neon-red to-neon-amber hover:bg-neon-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green-dark"
              >
                Buy Now
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-4 py-3 text-lg font-medium text-white bg-gradient-to-r from-neon-amber to-neon-red rounded-lg shadow-md hover:bg-neon-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue-dark"
              >
                Chart
              </a>
            </div>
          </div>
        </div>
        {/* Image */}
        <div
          data-aos="fade-left"
          //class name more right
          
          className="relative flex flex-col justify-right w-full max-w-2xl overflow-hidden rounded-lg shadow-lg md:rounded-xl"
        >
          <Image
            src={MacBarSrc}
            className="rounded-t-lg md:rounded-t-l md:rounded-l-lg " 
            alt="Mac window bar"
          />
        </div>
      </div>
    </section>
  );
};
