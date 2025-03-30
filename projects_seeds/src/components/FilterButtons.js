import React from "react";

function FilterButtons({ tags, activeTag, onTagChange }) {
  return (
    <div className="filter-buttons">
      {tags.map((tag) => (
        <button
          key={tag}
          className={activeTag === tag ? "active" : ""}
          onClick={() => onTagChange(tag)}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;

const styles = `
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    padding: 15px 0;
  }

  .filter-buttons button {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: #e8e8e8;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #2d2d2d;
  }

  .filter-buttons button:hover {
    background: #d9d9d9;
  }

  .filter-buttons button.active {
    background: #d4a017; /* Muted gold */
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(212, 160, 23, 0.3);
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
