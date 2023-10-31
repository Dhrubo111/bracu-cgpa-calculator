document.addEventListener(
  "DOMContentLoaded" , () =>{

    let rankLink = document.getElementById("ranking-page");

    let rankLinkMassage = document.getElementById("ranking-page-massage");

    let greenButton = document.getElementById("green-button");

    let comment = document.getElementById("comment");

    let standing = document.getElementById("a-standing");

    let greenMan = "Green Man: "
    function commentAndStandingOn(){
      standing.style.display = "block"
      comment.style.display = "block"
    }

    function commentAndStandingOff(){

      standing.style.display="none"
      comment.style.display = "none"
    }


    function massageOn(){
      rankLinkMassage.style.display = "Block"
    }

    function massageOff(){
      rankLinkMassage.style.display = "none"
    }

    function ranking(n){
      if(n===0){
        massageOn()
        rankLinkMassage.textContent = "Unranked";
        commentAndStandingOn()
        standing.textContent = "Newcomer"
        comment.textContent = `${greenMan}CG 0..mhmm. You a newcomer? Or failing in every subject caused you this? That’d be saddening man!`
        
      }else if (n===0.1 || n < 1){
        massageOn()
        rankLinkMassage.textContent = "Unlucky"
        commentAndStandingOn()
        standing.textContent = "Probation";
        comment.textContent = `${greenMan}Can’t cope up? Let's just change this department man! Or how ‘bout a comeback ?! I was in your place once.`
      }else if(n===1 || n < 1.9){
        massageOn()
        rankLinkMassage.textContent = "Lower Third Class"
        commentAndStandingOn()
        standing.textContent = "Probation";
        comment.textContent = `${greenMan}I know you have the potentiality to comeback from this. I was in your place.`
      }else if(n===1.9){
        massageOn()
        rankLinkMassage.textContent = "Higher Third Class"
        commentAndStandingOn()
        standing.textContent = "Probation";
        comment.textContent = `${greenMan}Oowwwff!! Maaaann! On probation just cause you lack 0.1!`
      }else if(n === 2){
        massageOn()
        rankLinkMassage.textContent = "Dead End"
        commentAndStandingOn()
        standing.textContent = "Satisfactory";
        comment.textContent = `${greenMan}Hey man alert! ALERT! Please be serious or you’ll end up on probation!`
      }else if(n=== 2.1 || n < 2.5){
        massageOn()
        rankLinkMassage.textContent = "Lower Secondary Class"
        commentAndStandingOn()
        standing.textContent = "Satisfactory";
        comment.textContent = `${greenMan}Do you know? You cannot graduate from this university if you’ve less than 2.5?`
      }else if(n===2.5 || n < 3){
        massageOn()
        rankLinkMassage.textContent = "Higher Secondary Class"
        commentAndStandingOn()
        standing.textContent = "Satisfactory";
        comment.textContent=`${greenMan}You are very close yet too far from first class. HuhahaHAHAHA!`
      }else if(n===3 || n < 3.5){
        massageOn()
        rankLinkMassage.textContent = "First Class"
        commentAndStandingOn()
        standing.textContent = "Satisfactory";
        comment.textContent=`${greenMan}So, you’re in first class? But LOL, can you reach first class elite?`
      }else if(n===3.5 || n <3.65){
        massageOn()
        rankLinkMassage.textContent = "Elite Class"
        commentAndStandingOn()
        standing.textContent = "Distinction";
        comment.textContent = `${greenMan}You reached a distinction with first class elite rank. But can you move up to Exotic rank with higher distinction? Nooob?`
      }else if(n===3.65 || n <3.8 ){
        massageOn()
        rankLinkMassage.textContent = "Exotic Class"
        commentAndStandingOn()
        standing.textContent = "Higher Distinction";
        comment.textContent = `${greenMan}"OMYGOODNESS! Exotic class with higher distinction”..well you thought I’d say so? Heh, can you move up to mythical with highest distinction? Nooob.`
      }else if(n===3.8 || n < 3.99){
        massageOn()
        rankLinkMassage.textContent = "Mythical"
        commentAndStandingOn()
        standing.textContent = "Higher Distinction";
        comment.textContent=`${greenMan}Hmm! Hey Mr/Mrs. Future faculty! You grind so well ngl! But can you reach the LEGENDARY? Make the impossible POSSIBLE? Reach the peak that no one can? I know you can’t LOL.`
      }else if(n===3.99 || n <= 4){
        massageOn()
        rankLinkMassage.textContent = "LEGENDARY"
        commentAndStandingOn()
        standing.textContent = "Higher Distinction";
        comment.textContent=`${greenMan}Huh..Legendary..yea yeah..but can you reach…. *oh damn* You’re on top. Okay whatever.`
      }else{
        massageOn()
        rankLinkMassage.textContent = "invalid cgpa input"
      }
    }

    rankLink.addEventListener(
      "click" , () =>{
        massageOn()
        rankLinkMassage.textContent = "You Are Currently on the Ranking Page";
        setTimeout(() => {
          massageOff()
        }, 3000); // 3000 milliseconds (3 seconds)
      }
    )
    greenButton.addEventListener(
      "click" , () =>{
        commentAndStandingOff()
        massageOff()
        let cgpa = Number(document.getElementById("cgpa").value);
        ranking(cgpa);

      }
    )

  }
)