const anchors = document.querySelectorAll(".header__nav a.this-page, .welcome__links a");

anchors.forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();

    const id = anchor.getAttribute("href");
    const elem = document.querySelector(id);

    window.scroll({
      top: elem.offsetTop - 70,
      behavior: 'smooth'
    });
  })
})