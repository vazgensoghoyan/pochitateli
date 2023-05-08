const poemBtns = document.querySelectorAll(".poems__nav button");
const poems = document.querySelectorAll(".recomended-poems .poem");

// The function hides the poems and removes "active" from the buttons
function hidePoems() {
  poemBtns.forEach(item => item.classList.remove("active"));
  poems.forEach(item => item.classList.add("hide"));
}

// The function shows the poem and makes the corresponding button active by the given index
function showPoem(index) {
  poemBtns[index].classList.add("active");
  poems[index].classList.remove("hide");
}

poemBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hidePoems();
  showPoem(index);
}))