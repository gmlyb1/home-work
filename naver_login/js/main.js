document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll("#thumbnailList li");
  const mainImage = document.getElementById("mainImage");
  const nickName = document.querySelector(".nickName");
  const container = document.querySelector(".container");

  // Event delegation for click events on thumbnails
  container.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      const li = event.target.closest("li");
      if (li) {
        const index = li.getAttribute("data-index");
        const data = getDataByIndex(index);

        setBgColor(data.color[0], "#000"); // Initial background color setup
        setImage(mainImage, data);
        setNameText(data.name);

        // Toggle active class for thumbnails
        thumbnails.forEach((thumbnail) =>
          thumbnail.classList.remove("is-active")
        );
        li.classList.add("is-active");
      }
    }
  });

  function getDataByIndex(index) {
    // Assume data.js provides a global array `data`
    return data[index - 1]; // Adjust index since data.js index starts from 0
  }

  function setBgColor(colorA, colorB) {
    container.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
  }

  function setImage(imageElement, data) {
    imageElement.src = `./assets/${data.name.toLowerCase()}.jpeg`;
    imageElement.alt = data.alt;
  }

  function setNameText(name) {
    nickName.textContent = name;
  }
});
