const yesButton = document.getElementById("Yes");
const noButton = document.getElementById("No");
const cta = document.querySelector(".button");

noButton.addEventListener("mouseenter", () => {

  const yesIndex = Array.from(cta.children).indexOf(yesButton);
  const noIndex = Array.from(cta.children).indexOf(noButton);

  if (yesIndex < noIndex) {
    cta.insertBefore(noButton, yesButton);
  } else {
    cta.insertBefore(yesButton, noButton);
  }
});
