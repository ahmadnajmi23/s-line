const reset = () => {
  let cards = Array.from(document.querySelectorAll(".card"));
  for (const card of cards) {
    // Reset card styles to their original CSS values
    card.style.width = "";

    const txtDiv = card.querySelector(".txt");
    if (txtDiv) {
      // Reset text div styles to their original CSS values
      txtDiv.style.display = "";
      txtDiv.style.opacity = "";
      txtDiv.style.marginTop = "";
    }
  }
  main.style.backgroundColor = "";
};
//one function to tackle all card clicks, catering to common expansion related properties & we simply use an array to change bg-color into custom bg-rest all properties are same, so we can create a single function to cater to that.
const showCard = (event) => {
  reset(); // reset all cards then expand current card so that it looks like only a specific card expands and rest go back to original config.
  const target = event.currentTarget;
  target.style.width = "400px";
  let txtDiv = target.querySelector(".txt");
  if (txtDiv) {
    txtDiv.style.display = "flex";
    txtDiv.style.flexDirection = "column";
    txtDiv.style.textAlign = "left";
    txtDiv.style.justifyContent = "flex-end";
    txtDiv.style.marginTop = "auto";
    txtDiv.style.width = "70%";
    txtDiv.style.padding = "20px";
  }
  const cardId = target.id;
  if (cardBackgrounds[cardId]) {
    main.style.backgroundColor = cardBackgrounds[cardId];
  }
};
const cardBackgrounds = {
  c1: "#000000ff",
  c2: "#000000ff",
  c3: "#000000ff",
  c4: "#000000ff",
  c5: "#000000ff"
};
const allCards = document.querySelectorAll(".card");
const main = document.querySelector(".main");
//applying event listener to all cards
allCards.forEach((card) => {
  card.addEventListener("click", showCard);
});
