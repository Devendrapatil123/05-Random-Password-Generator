const qustions = [
    {
        qustions: "What is HTML?",
         answers: [
            { text :" HTML describes the structure of a webpage", correct: false},
            {text : "HTML is the standard markup language mainly used to create web pages", correct: false},
            {text : "HTML consists of a set of elements that helps the browser how to view the content", correct :false},
            {text : "All of the mentioned", correct: true}
         ]
    },

    {
        qustions: "Who is the father of HTML?",
         answers: [
            { text :"Rasmus Lerdorf", correct: false},
            {text : "Tim Berners-Lee", correct: true},
            {text : "Sergey Brin", correct :false},
            {text : " Brendan Eich", correct: false}
         ]    
    },

    {
        qustions: " HTML stands for _________",
        answers: [
           { text :"HyperText Markup Language", correct: true},
           {text : "HyperText Machine Language", correct: false},
           {text : "HyperText Marking Language", correct :false},
           {text : "HighText Marking Language", correct: false}
        ]   
    },

    {
        qustions: "In which part of the HTML metadata is contained?",
        answers: [
           { text :"head tag", correct: true},
           {text : "title tag", correct: false},
           {text : "html tag", correct :false},
           {text : "body tag", correct: false}
        ]    
    },

    {
        qustions: "Which of the following is used to read an HTML page and render it?",
        answers: [
           { text :"Web server", correct: false},
           {text : "Web network", correct: false},
           {text : "Web browser", correct :true},
           {text : "Web matrix", correct: false}
        ] 
    },
    {
        qustions: "Which element is used for or styling HTML5 layout?",
        answers: [
           { text :"CSS", correct: true},
           {text : "jQurey", correct: false},
           {text : "JavaScript", correct :false},
           {text : "PHP", correct: false}
        ]    
    },
    {
        qustions: " HTML is a subset of ___________",
        answers: [
           { text :"SGMT", correct: false},
           {text : "SGML", correct: true},
           {text : "SGME", correct :false},
           {text : "XHTML", correct: false}
        ] 
    } ,
    {
        qustions: " Which of the following extension is used to save an HTML file?",
        answers: [
           { text :".hl", correct: false},
           {text : ".h", correct: false},
           {text : ".htl", correct :false},
           {text : ".html", correct: true}
        ]    
    },
    {
        qustions: "Which attribute specifies a unique alphanumeric identifier to be associated with an element?",
        answers: [
           { text :"type", correct: false},
           {text : "article", correct: false},
           {text : "id", correct :true},
           {text : "class", correct: false}
        ] 
    },
    {
        qustions: "Which of the following is an HTML specification used to add more information to HTML tags?",
        answers: [
           { text :"Modifydata", correct: false},
           {text : "Minidata", correct: false},
           {text : "Macrodata", correct :false},
           {text : "Microdata", correct:true}
        ] 
    }
];

const qustionElement = document.getElementById("qustion");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQustionIndex = 0;
let score = 0;

function start(){
    currentQustionIndex =0;
    score =0 ;
    nextButton.innerHTML="Next";
    showQustion();
}

function showQustion(){
    resetState()
    let currentQustion = qustions[currentQustionIndex];
    let qustionNo = currentQustionIndex + 1;
    qustionElement.innerHTML = qustionNo + ". " + currentQustion.
    qustions;

    currentQustion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    });
}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAns(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct == "true"){
            button.classList.add("correct");
        }
        button.disabled = true;        
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    qustionElement.innerHTML = `You Scored ${score} Out Of ${qustions.length}`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQustionIndex++;
    if(currentQustionIndex < qustions.length){
        showQustion()
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQustionIndex < qustions.length){
        handleNextButton()
    }
    else{
        start();
    }
})
start();
