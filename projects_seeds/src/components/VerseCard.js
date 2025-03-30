import React from "react";

function VerseCard({ text, reference }) {
  return (
    <div className="verse-card">
      <p className="verse-text">{text}</p>

      <p className="verse-reference">{reference}</p>
    </div>
  );
}

export default VerseCard;

// Inline styles
const styles = `
  .verse-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .verse-text {
    margin: 0 0 12px 0;
    font-size: 20px; /* Slightly larger for emphasis */
    font-weight: 500;
    line-height: 1.6;
    color: #1f2937; /* Dark gray for contrast */
  }

  .verse-reference {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #6b7280; /* Softer gray */
    font-style: italic;
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    .verse-text {
      font-size: 18px;
    }
    .verse-reference {
      font-size: 13px;
    }
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);
