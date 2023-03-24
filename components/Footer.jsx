import Image from "next/image";

// Built with Vivid (https://vivid.lol) ⚡️

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="items-center justify-between px-10 py-4 mx-auto sm:px-6 flex flex-row max-w-7xl">
        <div className="items-center gap-4 flex flex-row">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; ZkMaru Labs 2023
          </div>
        </div>
        <a
          href="ht"
          aria-label="Join Telegram"
          className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
        >
          Join our Community!
        </a>
      </div>
    </footer>
  );
};
