const quizData = [
    {
        question:'How old is Florin',
        a:'10',
        b:'17',
        c:'26',
        d:'110',
        correct:'c'
    },
    {
        question:'What is the best Programming Language',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d'
    },
    {
        question:'Who is the president of US',
        a:'Marco Narca',
        b:'Donald Trump',
        c:'Barack Obama',
        d:'Ivan Saidano',
        correct:'b'
    },
    {
        question:'What does HTML stand for',
        a:'Hypertext MarkUp Language',
        b:'Cascading Style Sheet',
        c:'Javascript Object Notation',
        d:'Application Programming Interface',
        correct:'a'
    }
]

const questionEl = document.getElementById('question');
const answer_list = document.querySelectorAll(".answer");
const quiz = document.querySelector('#quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitButton = document.getElementById('submit')
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question;
    
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}

function getSelected(){

    let final_answer;
    answer_list.forEach(function (answerel){

        if (answerel.checked){
            
            final_answer = answerel.id
        }
    });

    return final_answer
}


function deselectAnswers(){

    answer_list.forEach(function (answerel){

        answerel.checked = false
    });
}

submitButton.addEventListener('click', function (){
    const answer = getSelected();


    if (answer){
        
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz ++;

        if (currentQuiz < quizData.length){
            loadQuiz()

        }else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`

        }

    }
    
})