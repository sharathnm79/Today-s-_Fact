import { CATEGORIES } from "../utils/data.js";

function CategoryFilter({ setCurCategory }) {
  return (
    <aside>
      <ul className="categories">
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurCategory("all")}>
            All
          </button>
        </li>
        {CATEGORIES.map((cat, i) => (
          <li key={i} className="category">
            <button
              className="btn btn-category"
              onClick={() => setCurCategory(cat.name)}
              style={{ backgroundColor: cat.color }}>
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
