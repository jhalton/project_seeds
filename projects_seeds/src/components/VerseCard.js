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

const styles = `
  .verse-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .verse-text {
    margin: 0 0 12px 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.6;
    color: #2d2d2d;
  }

  .verse-reference {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    color: #7a6c5d;
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
