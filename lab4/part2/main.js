const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Image data
const images = [
  {
    filename: "pic1.jpg",
    alt: "Closeup of a human eye"
  },
  {
    filename: "pic2.jpg",
    alt: "Rock that looks like a wave"
  },
  {
    filename: "pic3.jpg",
    alt: "Purple and white pansies"
  },
  {
    filename: "pic4.jpg",
    alt: "Section of wall from a pharaoh's tomb"
  },
  {
    filename: "pic5.jpg",
    alt: "Large moth on a leaf"
  }
];

// Base URL
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Create thumbnails
for (const image of images) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", baseURL + image.filename);
  newImage.setAttribute("alt", image.alt);
  newImage.setAttribute("tabindex", "0");

  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", () => {
    updateDisplayedImage(newImage);
  });
}

// Display selected image
function updateDisplayedImage(img) {
  displayedImage.src = img.src;
  displayedImage.alt = img.alt;
}

// Darken / Lighten Button
btn.addEventListener("click", () => {
  const currentClass = btn.getAttribute("class");

  if (currentClass === "dark") {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    btn.setAttribute("class", "light");
  } else {
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    btn.setAttribute("class", "dark");
  }
});