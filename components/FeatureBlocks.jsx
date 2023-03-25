import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const FeatureBlocks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-20 gap-16 px-12 py-24 mx-auto text-center flex flex-col max-w-7xl">
        {/* Header */}
        <div className="gap-4 flex flex-col">
          <h2
            data-aos="zoom-y-out"
            className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-amber to-neon-red">
              &quot;Roadmap&quot;
            </span>
          </h2>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            Stop wasting your time on rugs, heres our roadmap
          </p>
        </div>
        {/* Blocks */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {/* Block 1 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <ShuffleIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Start (Q1 2023)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We will do A Stealth Launch, Partnership, and Marketing. We also release our whitepaper and socials!
            </p>
          </div>
          {/* Block 2 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <SignalIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Buidling! (Q2 2023)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              NFT Launch and stake, DEX Launch, and Game-fi Launch
            </p>
          </div>
          {/* Block 3 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <TalkingIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              CEX Listing (Q3 2023)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ehem, we will list on CEX then do some multi-chain bridges. Did you know we planning to do an upgrade to our Game-fi too?
            </p>
          </div>
          {/* Block 4 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <DoorIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Nextstop (Q4 2023)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              MaruDAO? We will do a DAO Launch, and we will never stop building our community!
              World tour? We will do a world tour to meet our community!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
