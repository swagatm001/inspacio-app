import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Props } from "@/interfaces/Props";
import { Navigation } from "./Navigation";
import { NavigationLinks } from "./NavigationLinks";
import { SocialLinks } from "./SocialLinks";
import { GetInTouch } from "./GetInTouch";

interface I_Ham {
  isOpen: boolean;
  toggle: () => void;
}

const Ham: React.FC<I_Ham> = ({ isOpen, toggle }) => {
  return (
    <button
      className="flex flex-col items-center justify-center rounded-md bg-transparent border border-transparent focus:outline-none"
      onClick={toggle}
    >
      <motion.div
        className="w-6 h-0.5 bg-gray-900 rounded-full origin-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 2 },
        }}
      />
      <motion.div
        className="w-6 h-0.5 bg-gray-900 rounded-full mt-1 origin-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <motion.div
        className="w-6 h-0.5 bg-gray-900 rounded-full mt-1 origin-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -2 },
        }}
      />
    </button>
  );
};

export const HamMenu: React.FC<{ className: string }> = ({ className }) => {
  const [isOpen, setOpen] = React.useState(false);

  const toggleMenu = () => setOpen((x) => !x);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full ${
        isOpen ? "h-full" : "h-20"
      } ${className}`}
    >
      <div className="h-20 w-full px-6 flex justify-end">
        <Ham isOpen={isOpen} toggle={toggleMenu} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="w-full h-full bg-white">
            <Navigation className="w-full flex-col">
              <NavigationLinks className="w-full flex-col items-center justify-center" />
              <SocialLinks />
              <GetInTouch />
            </Navigation>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
