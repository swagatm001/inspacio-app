import { T_Options } from "@/interfaces/Types";
import clsx from "clsx";
import React from "react";


export type T_Category = T_Options

interface I_Categories {
  categories: Array<T_Category>;
  onSelect: (selection: T_Category) => void;
}

export const Categories: React.FC<I_Categories> = ({
  categories,
  onSelect,
}) => {
  const [selected, setSelected] = React.useState<T_Category>(categories[0]);

  const handleSelection = (category: T_Category) => {
    setSelected(category);
    if (onSelect) onSelect(category);
  };

  return (
    <div>
      <div>
        <p className="text-3xl font-semibold">Categories</p>
      </div>
      <div className="mt-4">
        <ul className="flex">
          {categories.map((category, idx) => (
            <li
              key={category.value}
              className={clsx(
                "pr-6 mr-6 text-gray-400",
                idx !== categories.length - 1 && "border-r border-gray-400",
                category.value === selected?.value && "text-gray-900"
              )}
            >
              <button
                type="button"
                className="text-xl"
                onClick={() => handleSelection(category)}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
