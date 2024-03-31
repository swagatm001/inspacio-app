"use client"

import { categoriesConstants, projectsConstants } from "@/constants/projects";
import { Categories } from "./Categories";
import { Gallery } from "./Gallery";
import React from "react";
import { T_Options } from "@/interfaces/Types";

const PortfolioContext = React.createContext({});

export enum E_Portfolio {
  COMMERCIAL = 1,
  RESIDENTIAL = 2,
}

export const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = React.useState<T_Options>(categoriesConstants[0])

  return (
    <PortfolioContext.Provider value={{  }}>
      <div className="flex flex-col gap-16 p-6">
        <Categories categories={categoriesConstants} onSelect={setSelectedPortfolio} />
        <Gallery projects={projectsConstants} selectedCategory={selectedPortfolio} />
      </div>
    </PortfolioContext.Provider>
  );
};
