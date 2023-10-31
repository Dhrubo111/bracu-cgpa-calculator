document.addEventListener("DOMContentLoaded", () => {
  let gpaLink = document.getElementById("gpa-page");
  let gpaLinkMassage = document.getElementById("gpa-page-massage");
  let numberOfCourses;
  let cgs =[];
  let greenButton = document.getElementById("green-button");
  let lowImage = document.getElementById("low");
  let midImage = document.getElementById("mid");
  let highImage = document.getElementById("high");
  let totalCgs = 0 ;
  let finalGpa = 0;

  function printGpa() {
    gpaLinkMassage.style.display="block"
    gpaLinkMassage.textContent = `Your GPA is ${finalGpa}`;
    if (finalGpa >= 0 && finalGpa <= 2) {
      lowImage.style.display = "block";
      lowImage.style.width = "75%";
      lowImage.style.boxShadow = "0 0 10px green";
      lowImage.style.margin = "auto";
    } else if (finalGpa > 2 && finalGpa <= 3) {
      midImage.style.display = "block";
      midImage.style.width = "75%";
      midImage.style.boxShadow = "0 0 10px green";
      midImage.style.margin = "auto";
    } else if (finalGpa > 3 && finalGpa <= 4) {
      highImage.style.display = "block";
      highImage.style.width = "75%";
      highImage.style.boxShadow = "0 0 10px green";
      highImage.style.margin = "auto";
    }
  }

  function gpaCalculator() {
    
    cgs.forEach((element) => {
      totalCgs += Number(element);
    });

    finalGpa = ((totalCgs / numberOfCourses) * 4)
    printGpa();
  
  }
  gpaLink.addEventListener("click", () => {
    gpaLinkMassage.style.display = "block";
    gpaLinkMassage.textContent = "You Are Currently on the GPA Page";
    setTimeout(() => {
      gpaLinkMassage.style.display = "none";
    }, 3000);
  });

  greenButton.addEventListener("click", () => {
    lowImage.style.display = "none";
    midImage.style.display = "none";
    highImage.style.display = "none";
    gpaLinkMassage.style.display = "none";
    numberOfCourses =4*( Number(document.getElementById("number-of-cources").value))
    cgs = (document.getElementById("cgs").value).split(",")
    gpaCalculator();
  });


});
