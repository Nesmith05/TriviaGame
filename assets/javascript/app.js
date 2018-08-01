//Trivia game
//Variables Used
// var score = 0;
// var timer=30;
//
///////////////////////Quiz Questions!/////////////////
// var myQuizQuestions = [
//     {
//         question: "Where does the show take place?",
//         answers: [
//              "Santa Barbara",
//              "Toronto",
//              "San Jose",
//              "Quebec"
//         ],
//         correctAnswer: 0

//     },
//     {
//         question: "How does Shawn get his abilities to become a psychic detective?",
//         answers: [
//             "Inherited from his mother",
//             "A freak accident",
//             "Trained to observe by his father"
//         ],
//         correctAnswer: 2
//     },
//     {
//         question: "What is the name of Burton Guster's car?",
//         answers: [
//             "Blueberry",
//             "Blackberry",
//             "Raspberry",
//             "Boyz-n-berry"
//         ],
//         correctAnswer: 0
//     },
//     {
//         question: "What is the name of the serial killer obsessed with Shawn Spencer?",
//         answers: [
//             "Mrs. Lightly",
//             "Pierre Despereaux",
//             "Mr. Yang",
//             "Mrs. Yin"
//         ],
//         correctAnswer: 2
//     },
//     {
//         question: "Where did Juliet O'Hara work before moving to Shawn and Gus's town?",
//         answers: [
//             "New York City",
//             "Boston",
//             "New Orleans",
//             "Miami"
//     ],
//         correctAnswer: 3
//     },
//     {
//         question: "What is Junior Detective Buzz McNab's part-time job?",
//         answers: [
//             "Consultant",
//             "Stripper",
//             "Bookkeeper",
//             "Writer"
//         ],
//         correctAnswer: 1
//     },
//     {
//         question: "Which fruit is used as a running gag throughout the show's run?",
//         answers: [
//             "Blueberry",
//             "Pineapple",
//             "Tangelo",
//             "Watermelon"
//         ],
//         correctAnswer: 1
//     },
//     {
//         question: "Why was Detective Carlton Lassiter assigned a new partner?",
//         answers: [
//            "He was bullying his partner",
//             "His partner died in the line of duty",
//             "His partner quit",
//             "He had an affair with his partner"
//         ],
//         correctAnswer: 3
//     },
//     {
//         question: "What is date on which Shawn and Gus are hired to find a missing camp counselor at a childhoor friend's murder mystery camp?",
//         answers: [
//             "Friday the 13th",
//             "Monday the 12th",
//             "Tuesday the 17th",
//             "Wednesday the 16th"
//         ],
//         correctAnswer: 2
//     },
//     {
//         question: "What is Gus's go-to line to hit on women?",
//         answers: [
//             "You heard about Pluto? That's messed up, right?",
//             "Do you have a map? I'm getting lost in your eyes.",
//             "Hi, how was heaven when you left it?",
//             "Baby, all your facial parts are in the right spots."
//         ],
//         correctAnswer: 0
//     },
// ]




var timer = 30;
var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
//////////////////////////////////////////////////
$(document).ready(function() {
    timer= 30;
    score=0;
    var intervalID;
    /////////first page//////
    $(".game-container").hide();
    $("#start").on("click", function() {
        $(".container").hide();
        $(".game-container").show();
    });
    //Start on click and start the Run function
    $("#start2").on("click", run);
    //Finish on click and start the Submit function to view results
    $("#submit").on("click", function() {
        timer === 0;
        clearInterval(intervalID);
    });
    
    function run () {
        clearInterval(intervalID); //we'll write that function later
        intervalID = setInterval(countdown, 1000);
    }
    function countdown () {
        timer--;
        $("#timer").text(timer);
    
        if (timer === 0) {
            //Game Over!
            results(); //future fubnctiion
            clearInterval();
        }
    }
    function results () {
        clearInterval(intervalID);

    }

    var q1 = $("input[name='q1']");
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='q1']:checked").val();
        if(radioValue ){
            // alert("Your are a - " + radioValue);

        }
    });
    var q1 = $("input:radio[name='q1']:checked").val();
    var q2 = $("input:radio[name='q2']:checked").val();
    var q3 = $("input:radio[name='q3']:checked").val();
    var q4 = $("input:radio[name='q4']:checked").val();
    var q5 = $("input:radio[name='q5']:checked").val();
    var q6 = $("input:radio[name='q6']:checked").val();
    var q7 = $("input:radio[name='q7']:checked").val();
    var q8 = $("input:radio[name='q8']:checked").val();
    var q9 = $("input:radio[name='q9']:checked").val();
    var q10 = $("input:radio[name='q10']:checked").val();

    // console.log(q5 + "in here!");

//checking correct answers
	if(q1 == undefined){
        noAnswer++;
    }
    else if(q1 == "Santa Barbara"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q2 == undefined){
        noAnswer++;
    }
    else if(q2 == "Trained to observe by his father"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q3 == undefined){
        noAnswer++;
    }
    else if(q3 == "Blueberry"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q4 == undefined){
        noAnswer++;
    }
    else if(q4 == "Mr. Yang"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q5 == undefined){
        noAnswer++;
    }
    else if(q5 == "Miami"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q6 == undefined){
        noAnswer++;
    }
    else if(q6 == "Stripper"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q7 == undefined){
        noAnswer++;
    }
    else if(q7 == "Pineapple"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q8 == undefined){
        noAnswer++;
    }
    else if(q8 == "He had an affair with his partner"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q9 == undefined){
        noAnswer++;
    }
    else if(q9 == "Tuesday the 17th"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }

    if(q10 == undefined){
        noAnswer++;
    }
    else if(q10 == "You heard about Pluto? That's messed up, right?"){
        rightAnswer++;
    }
    else{
        wrongAnswer++;
    }
});

//Results
$("#right-answers").html(rightAnswer);
$("#wrong-answers").html(wrongAnswer);
$("#unanswered").html(noAnswer);

