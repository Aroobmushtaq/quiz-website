const questions=[
   
   
    {
        question:"Name the first ever female Prime Minister in the world?",
        answers:[
            {text:"Benazir Bhutto", correct: false},
            {text:"Indra Gandi", correct: false},
            {text:"Sirimavo Bandaranaike", correct: true},
            {text:"Golda Meir", correct: false}
        ]
    },
    
    {
        question:"Choose the correct spelling from the followings?",
        answers:[
            {text:"Cemetary", correct: false},
            {text:"Cemetery", correct: true},
            {text:"Cemmetary", correct: false},
            {text:"Ccemmetery", correct: false}
        ]
    },
    {
        question:"The term 'Computer' derived from?",
        answers:[
            {text:"Latin", correct: true},
            {text:"German", correct: false},
            {text:"French", correct: false},
            {text:"Arabic", correct: false}
        ]
    },
    {
        question:"Who is the father of internet?",
        answers:[
            {text:"Chares Babbage", correct: false},
            {text:"Vint cerf", correct: true},
            {text:"Denis riche", correct: false},
            {text:"Martin Cooper", correct: false}
        ]
    },
    {
        question:"WWW stand for?",
        answers:[
            {text:"World Whole Web", correct: false},
            {text:"Wide World Web", correct: false},
            {text:"web World Wide", correct: false},
            {text:"World wide web", correct: true}
        ]
    }
   
  
];
const questionElement=document.getElementById("question");
const answerBtn=document.getElementById("answer");
const next=document.getElementById("next");
let timerEl=document.querySelector("#timer")
let currentIndex=0
let score=0
function startquiz(){
    currentIndex=0
    score=0
    next.innerHTML="Next"
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentQustion=questions[currentIndex]
    let questionNo=currentIndex+1
    questionElement.innerHTML=questionNo + '.' +currentQustion.question

    currentQustion.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add('btn')
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
  
}
function resetState(){
    next.style.display="none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
function selectAnswer(e){
    const selectbtn=e.target
    const iscorect=selectbtn.dataset.correct==="true"
    if(iscorect){
        selectbtn.classList.add("correct")
        score++
    }
    else{
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerBtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    })
    next.style.display="block"
}
function showscore(){
    resetState()
    questionElement.innerHTML=`You score ${score} out of ${questions.length}!`
    next.innerHTML=`Play Again`
    next.style.display="block"
}
function handNextBtn(){
    currentIndex++
    if(currentIndex<questions.length){
        showQuestion()
    }
    else{
        showscore()
    }
}
next.addEventListener("click",()=>{
    if(currentIndex<questions.length){
        handNextBtn();
    }
    else{
        startquiz()
    }
},1000)
startquiz()