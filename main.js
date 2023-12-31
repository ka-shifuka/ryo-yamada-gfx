  function getQuote() {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal.fire({ text: data.content });
      });
  }
window.addEventListener("DOMContentLoaded", function () {

  /*
   * theme toggler
   */
  const themeToggler = document.querySelector("#theme-toggler");
  const icon = themeToggler.querySelector("i");

  let isDark = false;
  themeToggler.addEventListener("click", () => {
    const html = document.querySelector("html");
    const browserBar = document.querySelector("#browser-bar");

    isDark = !isDark;
    if (isDark) {
      html.classList.add("dark");
      browserBar.content = "#202020";
      icon.classList.remove("bi-moon-stars");
      icon.classList.add("bi-sun");
    }
    if (!isDark) {
      html.classList.remove("dark");
      browserBar.content = "#ffffff";
      icon.classList.remove("bi-sun");
      icon.classList.add("bi-moon-stars");
    }
  });

});
