import React, { useState, useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import VerseCarousel from "./components/VerseCarousel";
import "./App.css";

// Sample verse data (replace with database later)
const initialVerses = [
  {
    text: "Be strong and courageous. Do not be afraid... - Joshua 1:9",
    tags: ["encouragement"],
  },
  {
    text: "Love is patient, love is kind... - 1 Corinthians 13:4",
    tags: ["love"],
  },
  {
    text: "The Lord is close to the brokenhearted... - Psalm 34:18",
    tags: ["grief"],
  },
  {
    text: "For God so loved the world... - John 3:16",
    tags: ["love", "encouragement"],
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
    </div>
  );
}

export default App;
