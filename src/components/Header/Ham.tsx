import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { NavigationLinks } from "./NavigationLinks";
import { SocialLinks } from "./SocialLinks";
import { GetInTouch } from "./GetInTouch";
import Hamburger from 'hamburger-react'

export const HamMenu: React.FC<{ className: string }> = ({ className }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full ${
        isOpen ? "h-full" : "h-20"
      } ${className}`}
    >
      <div className="h-20 w-full px-6 flex justify-end items-center">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="w-full h-full bg-white">
            <Navigation className="w-full flex-col">
              <NavigationLinks className="w-full flex-col items-center justify-center" onClick={() => setOpen(false)} />
              <SocialLinks />
              <GetInTouch />
            </Navigation>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
