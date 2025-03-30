import React from "react";

function VerseCard({ text }) {
  return (
    <div className="verse-card">
      <h3>{text}</h3>
    </div>
  );
}

export default VerseCard;

// Inline styles for this component
const styles = `
  .verse-card h3 {
    margin: 0;
    font-size: 18px;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    .verse-card h3 {
      font-size: 16px;
    }
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
