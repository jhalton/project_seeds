import React, { useState, useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import VerseCarousel from "./components/VerseCarousel";
import "./App.css";

// Sample verse data (replace with database later)
const initialVerses = [
  {
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    tags: ["encouragement"],
  },
  {
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    reference: "1 Corinthians 13:4",
    tags: ["love"],
  },
  {
    text: "The Lord is close to the brokenhearted and those who are crushed in spirit.",
    reference: "Psalm 34:18",
    tags: ["grief"],
  },
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    tags: ["love", "encouragement"],
  },
  {
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    reference: " 1 Corinthians 13:13",
    tags: ["love"],
  },
  {
    text: "The tongue has the power of life and death, and those who love it will eat its fruit.",
    reference: "Proverbs 18:21",
    tags: ["listening"],
  },
];

function App() {
  const [filterTag, setFilterTag] = useState("all");
  const [verses, setVerses] = useState(initialVerses);

  // Filter verses when tag changes
  useEffect(() => {
    const filtered =
      filterTag === "all"
        ? initialVerses
        : initialVerses.filter((verse) => verse.tags.includes(filterTag));
    setVerses(filtered);
  }, [filterTag]);

  // Dynamic tags for reusability
  const tags = [
    "all",
    ...new Set(initialVerses.flatMap((verse) => verse.tags)),
  ];

  return (
    <div className="App">
      <FilterButtons
        tags={tags}
        activeTag={filterTag}
        onTagChange={setFilterTag}
      />
      <VerseCarousel verses={verses} />
      <footer className="footer">
        <p>Created by Jeanette Halton</p>
        <div className="social-links">
          <a
            href="https://github.com/jhalton"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jeanettehalton"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://jeanettehalton.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
