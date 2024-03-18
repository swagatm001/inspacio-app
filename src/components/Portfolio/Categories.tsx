export const Categories = () => {
  return (
    <div>
      <div>
        <p className="text-3xl font-semibold">Categories</p>
      </div>
      <div className="mt-4">
        <ul className="flex gap-6">
          <li>
            <button type="button" className="text-xl">Commercial</button>
          </li>
          <li>
            <button type="button" className="text-xl">Residential</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
