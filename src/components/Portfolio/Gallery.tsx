import { Project } from "./Project";

export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};
