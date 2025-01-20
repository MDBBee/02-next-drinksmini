const DrinksLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="join mb-8">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>
            Filter
          </option>
          <option>Drinks</option>
          <option>Khin khin</option>
          <option>Ogogoro</option>
        </select>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">new</span>
          <button className="btn join-item">Search</button>
        </div>
      </div>
      {children}
    </div>
  );
};
export default DrinksLayout;
