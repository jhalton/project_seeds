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

// Inline styles for this component
const styles = `
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px 0;
  }

  .filter-buttons button {
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    background-color: #ddd;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .filter-buttons button:hover,
  .filter-buttons button.active {
    background-color: #007bff;
    color: white;
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
