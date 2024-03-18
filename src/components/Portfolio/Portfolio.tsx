import { Categories } from "./Categories";
import { Gallery } from "./Gallery";

export const Portfolio = () => {
  return (
    <div className="flex flex-col gap-16 p-6">
      <Categories />
      <Gallery />
    </div>
  );
};
