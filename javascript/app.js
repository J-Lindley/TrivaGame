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
    answerThree: "Washington State University",
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
    answerOne: "ESPN Sports Center",
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

{
    question: "How has started the most games for the Seahawks",
    answerOne: "Steve Largent",
    answerTwo: "Doug Baldwin",
    answerThree: "Warren Moon",
    correctAnswer: "Steve Largent"
},

]
var questionContainer = $("#questions")
//make radio buttons for answers, each radio button needs to be named the same for each 
//for the for loop fill out <p> tag for the question, then apply the radios for the answers
//append a submit button at the bottom/or timer runes out 
//results will be it's own function

//make a for loop to post all the questions with answer options
//make the rules/questions div .hide when showing the results

//put this into the questions function
function displayQuestions() {
    var timer = 60
    var intervalId = setInterval(decrement, 1000)

    function decrement() {
        timer--;
        $("#timer").text(timer);
        if (timer === 0) {
            results
            clearInterval(intervalId)
        }
    }
    for (let i = 0; i<questionsArray.length; i++){
        questionContainer.append("<h2>" +questionsArray[i].question +"</h2>");
        // questionContainer.append("<input type='radio' name='question"+i+" value="+questionsArray[i].answerOne+">"+questionsArray[i].answerOne)
questionContainer.append(`<input type='radio' name='questions${i}'
     value="${questionsArray[i].answerOne}" >${questionsArray[i].answerOne}`);
 
     // questionContainer.append("<input type='radio' name='question"+i+" value="+questionsArray[i].answerOne+">"+questionsArray[i].answerOne)
    }
}
//loop over radio buttons, t/f if it's marked as the correct answer in the questions array, increment Correct and Incorrect new vars


$("#timer").on("click", function () {
    clearInterval(intervalId)
})
$("#start").on("click", function () {
    $("#rules").hide();
    displayQuestions()
})

//when timer ends, give results

function answers() {
}





