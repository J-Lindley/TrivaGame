var questionsArray = [{
    question: "Who has started the most games for the Seahawks",
    answerOne: "Steve Largent",
    answerTwo: "Russel Wilson",
    answerThree: "Warren Moon",
    correctAnswer: "Steve Largent"
},
{
    question: "Where was the first Seahawks training camp?",
    answerOne: "University of Washington",
    answerTwo: "Bellevue High School",
    answerThree: "Eastern Washington University",
    correctAnswer: "Eastern Washington University"
},
{
    question: "Brian Bosworth and Steve Largent retired in the same year. What was it?",
    answerOne: "1987",
    answerTwo: "1989",
    answerThree: "1990",
    correctAnswer: "1989"
},
{
    question: "Where did the name Legion of Boom come from?",
    answerOne: "The Bob and Groz show on 710 ESPN Seattle",
    answerTwo: "The Seattle Times",
    answerThree: "USA Today",
    correctAnswer: "The Bob and Groz show on 710 ESPN Seattle"
},
{
    question: "Which Seahawk has the most touchdowns?",
    answerOne: "Shaun Alexander",
    answerTwo: "Warren Moon",
    answerThree: "Marshawn Lynch",
    correctAnswer: "Shaun Alexander"
},
{
    question: "Which owner tried to move the team to LA in 1996?",
    answerOne: "Lloyd Nordstrom",
    answerTwo: "Ken Behring",
    answerThree: "Paul Allen",
    correctAnswer: "Ken Behring"
},
{
    question: "How many times have the Seahawks made the playoffs?",
    answerOne: "13",
    answerTwo: "16",
    answerThree: "19",
    correctAnswer: "16"
},
{
    question: "Who was the first owner of the Seahawks?",
    answerOne: "Lloyd Nordstrom",
    answerTwo: "Ken Behring",
    answerThree: "Paul Allen",
    correctAnswer: "Ken Behring"
},
{
    question: "What is Pete Carroll's only non-football job?",
    answerOne: "Selling wood products",
    answerTwo: "Used car salesman",
    answerThree: "Bartender",
    correctAnswer: "Selling wood products"
},
{
    question: "What is the capacity of CenturyLink Field?",
    answerOne: "67,800",
    answerTwo: "69,000",
    answerThree: "72,000",
    correctAnswer: "72,000"
},

]
var questionContainer = $("#questions")
var correct = 0
var incorrect = 0
var intervalId;

function displayQuestions() {
    var timer = 60
    intervalId = setInterval(decrement, 1000)

    function decrement() {
        timer--;
        $("#timer").text(timer);
        if (timer === 0) {
            results
            clearInterval(intervalId)
            scoreBoard()
        }
    }
    for (let i = 0; i < questionsArray.length; i++) {
        questionContainer.append("<h2>" + questionsArray[i].question + "</h2>");
        questionContainer.append(`<input type='radio' name='questions${i}'
     value="${questionsArray[i].answerOne}" >${questionsArray[i].answerOne}`);
        questionContainer.append(`<input type='radio' name='questions${i}'
     value="${questionsArray[i].answerTwo}" >${questionsArray[i].answerTwo}`);
        questionContainer.append(`<input type='radio' name='questions${i}'
    value="${questionsArray[i].answerThree}" >${questionsArray[i].answerThree}`);
    }

    questionContainer.append("<br><button id='finished'>Check Score!</button>")
}

$("#timer").on("click", function () {
    clearInterval(intervalId)
})
$("#start").on("click", function () {
    $("#rules").hide();
    displayQuestions()
})

$(document).ready(function () {

    $(document).on("click", "#finished", function (event) {
        var userAnswerOne =  $("input[name='questions0']").val()
        var userAnswerTwo =  $("input[name='questions1']").val()
        var userAnswerThree =  $("input[name='questions2']").val()
        var userAnswerFour =  $("input[name='questions3']").val()
        var userAnswerFive =  $("input[name='questions4']").val()
        var userAnswerSix =  $("input[name='questions5']").val()
        var userAnswerSeven =  $("input[name='questions6']").val()
        var userAnswerEight =  $("input[name='questions7']").val()
        var userAnswerNine =  $("input[name='questions8']").val()
        var userAnswerTen =  $("input[name='questions9']").val()
        var userAnswerEleven =  $("input[name='questions10']").val()

console.log(userAnswerEight, userAnswerNine)

        if(userAnswerOne === questionsArray[0].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerTwo === questionsArray[1].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerThree === questionsArray[2].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerFour === questionsArray[3].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerFive === questionsArray[4].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerSix === questionsArray[5].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerSeven === questionsArray[6].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerEight === questionsArray[7].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerNine === questionsArray[8].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
        if(userAnswerTen === questionsArray[9].correctAnswer){
            correct++
        }else{
            incorrect ++
        }
       
        clearInterval(intervalId)
        scoreBoard()
    
        
    });
function scoreBoard() {
    $('#questions').hide()
    $('#results').append("<p>You got "+ correct +" questions correct!</p>")
    $('#results').append("<p>You got "+ incorrect +" questions incorrect!</p>")
    $('#results').append("<button id='newGame'>Click to play again</button>")
}
    $(document).on("click", "#newGame", function (event) {
        correct = 0
        incorrect = 0
        $('#results').empty()
        $('#results').show()
        $('#questions').empty()
        $('#questions').show()
        displayQuestions()


    })
});


