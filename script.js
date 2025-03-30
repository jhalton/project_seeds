// Sample Bible verse data (ready for database)
const verses = [
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

// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Only one slide visible
  spaceBetween: 0, // No gap between slides
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: false, // Optional: remove if you don’t want dots
  effect: "slide", // Smooth transition
  speed: 300, // Transition speed in ms
  allowTouchMove: true, // Enable swipe on mobile
  watchSlidesVisibility: true, // Helps with hiding non-active slides
});

// Function to render verses
function renderVerses(filterTag = "all") {
  const container = document.getElementById("verse-container");
  container.innerHTML = ""; // Clear current slides

  const filteredVerses =
    filterTag === "all"
      ? verses
      : verses.filter((verse) => verse.tags.includes(filterTag));

  filteredVerses.forEach((verse) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `<h3>${verse.text}</h3>`;
    container.appendChild(slide);
  });

  swiper.update(); // Update Swiper after adding slides
  swiper.slideTo(0); // Start at first slide
}

// Initial render
renderVerses();

// Filter buttons
document.querySelectorAll(".filter-buttons button").forEach((button) => {
  button.addEventListener("click", () => {
    const tag = button.getAttribute("data-tag");
    renderVerses(tag);

    // Highlight active button
    document
      .querySelectorAll(".filter-buttons button")
      .forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
