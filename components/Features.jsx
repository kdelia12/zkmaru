/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import MacBarSrc from "../public/images/story.jpg";
import piechart from "../public/images/piechart.png";

// Built with Vivid (https://vivid.lol) ⚡️

export const Features = () => {
  return (
    <>
      {/* Feature 1 */}
      <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="relative z-20 items-center px-0 py-24 mx-auto flex flex-col max-w-7xl">
          <div className="w-5/6 gap-4 mx-auto mb-8 text-center flex flex-col md:w-2/3">
            <h2
              data-aos="zoom-y-out"
              className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-amber to-neon-red">
                &quot;Not Just&quot;
              </span>{" "}
              a Memecoin.
            </h2>
            <p
              data-aos="zoom-y-out"
              data-aos-delay="150"
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              Sharu, is a bad-ass samurai, can't just sit around while his country is being run by a tyrant king who only cares about his own power, leaving the people in poverty and injustice.
              </p>
              <p
              data-aos="zoom-y-out"
              data-aos-delay="150"
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              He decides to take matters into his own hands and starts gathering a crew of warriors from all walks of life, including those who are fed up with the current situation. He also seeks the support of community leaders and big shots in his country.
            </p>
          </div>
          <div className="w-5/6 p-4 md:w-1/2 md:p-12 bg-gradient-to-br rounded-xl from-neon-amber to-neon-red">
            <div
              data-aos="zoom-y-out"
              data-aos-delay="300"
              className="relative justify-center w-full max-w-2xl overflow-hidden shadow-lg flex flex-col rounded-lg md:rounded-xl"
            >
              <Image
                src={MacBarSrc}
                className="rounded-t-lg md:rounded-t-xl"
                alt="Mac window bar"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Feature 2 */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="relative z-20 items-center px-0 py-24 mx-auto flex flex-col max-w-7xl md:flex-row-reverse">
          <div className="w-5/6 gap-4 mx-auto mb-8 text-center flex flex-col md:w-2/5 md:text-left md:my-auto">
            <h2
              data-aos="zoom-y-out"
              className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-neon-yellow">
                Tokenomics
              </span>
              <br /> 
            </h2>
            <p
  data-aos="zoom-y-out"
  data-aos-delay="150"
  className="text-lg md:text-xl text-gray-600 dark:text-gray-400 list-disc list-inside"
>
  SHARU Tokenomics:
  <ul>
    <li>Total Supply: 100.000.000.000.000 $SHARU</li>
    <li>40% Liquidity</li>
    <li>20% $SHARU burn</li>
    <li>5% Teams</li>
    <li>5% Marketing</li>
    <li>20% Airdrop</li>
    <li>10% Cex listing</li>
  </ul>
</p>
          </div>
          <div className="w-5/6 p-4 md:w-1/2 md:p-12 bg-gradient-to-br rounded-xl from-neon-amber to-neon-red">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="relative justify-center w-full max-w-2xl overflow-hidden shadow-lg flex flex-col rounded-lg md:rounded-xl"
            >
              <Image
                src={piechart}
                className="rounded-t-lg md:rounded-t-xl"
                alt="Mac window bar"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Feature 3 */}
    </>
  );
};
