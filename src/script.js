const questions = [
    {
        question:"What is the correct command to create a new React project?",
        answers: [
            { text: "npx create-react-app my-app", correct: true},
            { text: "npx create-reactapp ", correct: false},
            { text: "npx-create-react-app ", correct: false},
            { text: "npx create", correct: false}

        ]
    },
    {
        question:"What command is used to start the React local development server?",
        answers: [
            { text: "npm build", correct: false},
            { text: "npm start ", correct: true},
            { text: "npm run dev ", correct: false},
            { text: "npm serve", correct: false}

        ]

    },
    {
        question:"Which keyword creates a constant in JavaScript?",
        answers: [
            { text: "let", correct: false},
            { text: "constant ", correct: false},
            { text: "const ", correct: true},
            { text: "var", correct: false}

        ]
        
    },
    {
        question:" In React, what does the term props stand for?",
        answers: [
            { text: "parameters", correct: false},
            { text: "procedures ", correct: false},
            { text: "properties ", correct: true},
            { text: "prototypes", correct: false}

        ]

    },
    {
        question:" What is the purpose of the onClick event handler in React?",
        answers: [
            { text: " Handling keyboard events", correct: false},
            { text: "Controlling page navigation ", correct: false},
            { text: "Triggering an action when a button is clicked ", correct: true},
            { text: "prototypes", correct: false}

        ]

    },
    {
        question:" What are the two main types of components in React.js?",
        answers: [
            { text: " Class based and functional", correct: true},
            { text: "Functional and stateful", correct: false},
            { text: "UI and container", correct: false},
            { text: "Presentational and container", correct: false}

        ]

    },
    {
        question:" JSX Stands for ___?",
        answers: [
            { text: " JavaScript Extension", correct: false},
            { text: "JavaScript", correct: false},
            { text: "JavaScript Extreme", correct: false},
            { text: "JavaScript XML", correct: true}

        ]

    },
    {
        question:" ___ are the smallest building blocks of React apps.",
        answers: [
            { text: "Components", correct: false},
            { text: "Tags", correct: false},
            { text: "JSX", correct: false},
            { text: "Elements", correct: true}

        ]

    },



];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ===  "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"

}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();


