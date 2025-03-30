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
    gap: 12px;
    padding: 15px 0;
  }

  .filter-buttons button {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: #e5e7eb; /* Light gray */
    border-radius: 20px; /* Pill shape */
    cursor: pointer;
    transition: all 0.3s ease;
    color: #374151; /* Darker gray text */
  }

  .filter-buttons button:hover {
    background: #d1d5db;
  }

  .filter-buttons button.active {
    background: #3b82f6; /* Modern blue */
    color: white;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
