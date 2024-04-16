"use-strict";

const forsideSection = document.getElementById("forside");
const kristinaStatistikSection = document.getElementById("section1");

forsideSection.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    kristinaStatistikSection.scrollIntoView({ behavior: "smooth" });
  }
});