document.addEventListener("DOMContentLoaded", function(){

    let quesDivs = document.querySelectorAll(".questions"),
        nextButtons = document.querySelectorAll(".nextbtn");
    
        let answerInputs = document.querySelectorAll(".ansInput")
        let userScore = 0
    
        let correctAnswers = ["armchair","lipstick","cupcake","sunflower","snowman"]
    
        function hideAllQuestions(){
          quesDivs.forEach(function(div){
            div.style.display = "none"
          })
        }
    
    quesDivs[0].style.display = "block"
    
    nextButtons.forEach(function(button,index){
    button.addEventListener("click", function(){
      hideAllQuestions();
      if(index < quesDivs.length-1){
        quesDivs[index+1].style.display = "block"
      }
      else{
        userScore = 0
        
        for(let i=0;i<correctAnswers.length;i++){
          if(answerInputs[i].value.toLowerCase() === correctAnswers[i]){
            userScore++
          }
        }
      
        let scoreMessage = document.querySelector(".message")
        scoreMessage.style.display = "block"
        if(userScore<3){
          scoreMessage.textContent = "Oops! You got " + userScore + " points 🤭"
        }
        else{
          scoreMessage.textContent = "You won!!! " + userScore + " " + "points 🥳"
        }
      }
    })
    })
    })

    gsap.from("h1", {
        x: -100,
        opacity: 0,
        duration: 3,
        ease: "power2.out"
      });

      gsap.from(".sno", {
        rotation: -180,
        opacity: 0,
        duration: 3,
        ease: "elastic.out(1, 0.75)"
      });


    