function quetionlist(queobj){
    this.QuestionList = queobj;
}
function QuestionObj(que , options){
    this.Question = que ;
    this.options = options;
}

function option(val , cor){
    this.value = val;
    this.correct = cor

}

// Quetions 1


let option1 = [new option("London" , false) , new option("Berlin" , false) , new option("Paris" , true)];
let que1 = new QuestionObj("What is the capital of France?" , option1);

// Question 2
let ops2 = [new option("Jupiter" , false) , new option("Mars" , true) , new option("Earth" , false)]
let que2 = new QuestionObj("Which planet is known as the Red Planet ?" , ops2)

// Question 3 
let ops3 = [new option("7" , true) , new option("5" , false) , new option("4" , false)];
let que3 = new QuestionObj("How many continents are there on Earth?"  , ops3);



let questionList = new quetionlist([que1 , que2 , que3]);



// code starts

const ntxbtn = document.querySelector(".nxbtn");
const questiontag = document.querySelector(".queText");
const optiontag  = document.querySelector(".options");
const showScore = document.querySelector(".showScore");
const play = document.querySelector(".play");
const correctAns = document.querySelector(".correctAns");



const buttons = optiontag.querySelectorAll('button');



let score = 0 ;



function showquestions(index){

if(index< (questionList.QuestionList.length)){
//    console.log(questionList);
    let que = questionList.QuestionList[index];
    questiontag.innerHTML= "Q."+Number(index+1)+" "+que.Question;
    questiontag.setAttribute("value" , index);
    let oparr = que.options;
    // console.log(oparr);





for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.innerHTML = oparr[i].value;
  

}


}
else{
    questiontag.classList.add("hidden");
    optiontag.classList.add("hidden");

    showScore.innerHTML=`<h3>Your score is ${score} out of 3</h3>`;

    ntxbtn.classList.add("hidden");
    
    play.classList.remove("hidden")
}
       

}
var index = 0 ;

function nextbtnClick(){

    index+=1;
    enableAll();
  
    showquestions(index);
    ntxbtn.classList.add("hidden")
    correctAns.classList.add("hidden")



}

document.addEventListener("DOMContentLoaded", () => {
    showquestions(index);
    

    
  });


  function onOptionClick(btn){
        let cor = "";
    ntxbtn.classList.remove("hidden")
     let cs = btn.innerHTML;
    let oplist = questionList.QuestionList[index].options;
    
    // console.log(oplist);
        
     for (let val in oplist) {

        if(oplist[val].correct === true){
              
               cor = oplist[val].value
              
        }  
       

     }
     
     if(cor == cs){
        // console.log(btn);

        
       disableAllButtons();
       score+=1
     }
     else{

       disableAllButtons();
       


     }
    correctAns.classList.remove("hidden")

     correctAns.innerHTML=`Correct ans  is ${cor}`;


  }


  function playAgain(){
    refreshPage();

    
    
  }

  function disableAllButtons() {
    buttons.forEach(function(button) {
        button.disabled = true;
    });
}



function enableAll() {
    buttons.forEach(function(button) {
        button.disabled = false;
    });
}

function refreshPage(){
    window.location.reload();
} 





