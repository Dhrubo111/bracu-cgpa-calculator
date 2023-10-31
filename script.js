document.addEventListener("DOMContentLoaded", () => {
  let homeLink = document.getElementById("home-page");
  let homeLinkMassage = document.getElementById("home-page-massage");
  let calculate = document.getElementById("green-button");
  let lowImage = document.getElementById("low");
  let midImage = document.getElementById("mid");
  let highImage = document.getElementById("high");
  let currentCg ;
  let totalCradits ;
  let craditsAttempted ;
  let enterCgs ;
  let cgpa;
  function tryAgain(){
    homeLinkMassage.style.display = "block"
    homeLinkMassage.style.color = "black"
    homeLinkMassage.style.boxShadow = "0 0 10px green"
    homeLinkMassage.style.padding = "10px"
    homeLinkMassage.style.backgroundColor = "#7D8C76"
    homeLinkMassage.textContent = `Try again with courses of 3 credit hours only.`
  }
  function printCGPA(){
    homeLinkMassage.style.display = "block"
    homeLinkMassage.style.color = "black"
    homeLinkMassage.style.boxShadow = "0 0 10px green"
    homeLinkMassage.style.padding = "10px"
    homeLinkMassage.style.backgroundColor = "#7D8C76"
    homeLinkMassage.textContent = `Your CGPA is around ${cgpa}`  
    if (cgpa >= 0 && cgpa <=2){
      lowImage.style.display="block";
      lowImage.style.width = "75%";
      lowImage.style.boxShadow = "0 0 10px green";
      lowImage.style.margin  = "auto";
    }else if(cgpa > 2 && cgpa <= 3){
      midImage.style.display="block";
      midImage.style.width="75%";
      midImage.style.boxShadow="0 0 10px green";
      lowImage.style.margin  = "auto";

    }else if(cgpa > 3 && cgpa <= 4){
      highImage.style.display = "block";
      highImage.style.width = "75%";
      highImage.style.boxShadow = "0 0 10px green";
      lowImage.style.margin  = "auto";
    }
  }
  function mainLogic(){
    if(craditsAttempted % 3 === 0){
      let coursesTaken = Number(craditsAttempted/3); //bug
      let points = 0 ; 
      let arrLen = 0 
      enterCgs.forEach(element => {
        points += Number(element)
        arrLen ++;
      });
      points *= 3;
      temp1 = currentCg * totalCradits;
      let finalCradits = totalCradits+(arrLen*3);
      cgpa = (temp1+points)/finalCradits
      cgpa = cgpa.toFixed(2);
      printCGPA();
    }else{
     tryAgain()
    }
  }

  homeLink.addEventListener("click", () => {
    homeLinkMassage.style.display = "block";
    homeLinkMassage.textContent = "You Are Currently on the Home Page"

    // Set a timer to hide the message after 3 seconds (you can adjust the time as needed)
    setTimeout(() => {
      homeLinkMassage.style.display = "none";
    }, 3000); // 3000 milliseconds (3 seconds)
  });

  calculate.addEventListener(
    "click" , () =>{
      currentCg = Number(document.getElementById("current-cg").value);
      totalCradits = Number(document.getElementById("total-cradits").value);
      craditsAttempted = Number(document.getElementById("cradits-attempted").value);
      enterCgs = (document.getElementById("enter-cgs").value).split(",");
      highImage.style.display = "none";
      midImage.style.display="none";
      lowImage.style.display="none";
      mainLogic()
      
    }
  )
});
