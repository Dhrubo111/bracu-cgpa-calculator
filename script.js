document.addEventListener("DOMContentLoaded", () => {
  let homeLink = document.getElementById("home-page");
  let homeLinkMassage = document.getElementById("home-page-massage");

  homeLink.addEventListener("click", () => {
    homeLinkMassage.style.display = "block";

    // Set a timer to hide the message after 3 seconds (you can adjust the time as needed)
    setTimeout(() => {
      homeLinkMassage.style.display = "none";
    }, 3000); // 3000 milliseconds (3 seconds)
  });
});
