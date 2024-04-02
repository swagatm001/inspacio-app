"use client"

import { categoriesConstants, projectsConstants } from "@/constants/projects";
import { Categories } from "./Categories";
import { Gallery } from "./Gallery";
import React from "react";
import { T_Options } from "@/interfaces/Types";

const PortfolioContext = React.createContext({});

export const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = React.useState<T_Options>(categoriesConstants[0])

  return (
    <PortfolioContext.Provider value={{  }}>
      <section className="flex flex-col gap-16 mb-20">
        <Categories categories={categoriesConstants} onSelect={setSelectedPortfolio} />
        <Gallery projects={projectsConstants} selectedCategory={selectedPortfolio} />
      </section>
    </PortfolioContext.Provider>
  );
};
