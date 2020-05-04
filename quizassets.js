const appState={
    counter:1,
    correct:0,
    incorrect:0,
    name:'',
    quizno: '',
    selectedAnswer:'',
    correctAnswerForCurrentQuestion:'',
    feedback:'',
    quizLength:0,
    timePassed:0,
    currentScore:0,
    clock:"",
    completedTime:"",
    information:'',
    question:"",
    result:""
    
}
let time;
document.addEventListener('DOMContentLoaded', () =>{
    

})
let getQuiz= async(url) =>{
    
        if(appState.quizno=="1")
        {
            const response= await fetch("http://localhost:3000/quiz/" +appState.quizno)
            const result = await response.json();
            console.log(Object.keys(result).length);
            appState.currentScore=(appState.correct/appState.quizLength)*100;
            appState.quizLength=Object.keys(result).length;
            console.log(appState.quizLength);
            generateQuiz(result);

        }
        else if(appState.quizno == "2")
        {
            const response= await fetch("http://localhost:3000/quiz/" +appState.quizno)
            const result = await response.json();
            console.log(result);
            appState.currentScore=(appState.correct/appState.quizLength)*100;
            appState.quizLength=Object.keys(result).length;
            console.log(appState.quizLength);
            generateQuiz(result);
 
        }
        
}

function getinformation(){
    var name=document.getElementById('name').value;
    var quiz=document.getElementById('quizField').value;
    

    appState.name=name;
    appState.quizno=quiz;
    console.log(appState);
    getQuiz();
   // generateQuiz(thequiz);

}
let getQuestion = async(url) => {
    if(appState.quizno=="1")
    {
        const response=await fetch("http://localhost:3000/quiz/" + appState.quizno + "/" + appState.counter)
        const result= await response.json();
        console.log(result.choices[2]);
        //appState.information=result;
       // console.log(appState.information);
        generateQuestion(result);
    }
    else if(appState.quizno=="2")
    {
        const response = await fetch("http://localhost:3000/quiz/" + appState.quizno +"/" + appState.counter)
        const result = await response.json();
        console.log(result);
       // appState.information=result;
        //console.log(appState.information);
        generateQuestion(result);
    }
}
function generateQuestion(data){

    //var data=getQuestion()
   // var hey=getQuestion()
   // console.log(data.answer)
    let what = appState.currentScore.toFixed(2);
    //console.log(appState.correctAnswerForCurrentQuestion)
    console.log(data)
    if(data.type=="multiple choice")
    {
        quiz_question = 
        `<h3>${data.question}</h3>
        <form id = "quiz_answer_form">
            <input type="radio" value = "${data.choices[0]}" name = "answer"></input>
            <label for = "answer1"> ${data.choices[0]} </label><br>
            <input type="radio" value = "${data.choices[1]}" name = "answer"></input>
            <label for = "answer2"> ${data.choices[1]} </label><br>
            <input type="radio" value = "${data.choices[2]}" name = "answer"></input>
            <label for = "answer3"> ${data.choices[2]} </label><br>
            <input type="radio" value = "${data.choices[3]}" name = "answer"></input>
            <label for = "answer4"> ${data.choices[3]} </label><br>
            <input type = "submit" value = "submit"></input>
           
        </form>
        <br>
        Score:${what}%`
        
    }
    
    else if(data.type== "short answer")
    {
        quiz_question =
        `<h3> ${data.question}</h3>
        <form id= "quiz_answer_form">
        <input type= "text" name ="answer">
        <input type="submit" value="submit">
        </form>
        <br>
        Score:${what}%`

    }
    else if(data.type == "true false")
    {
        quiz_question=
        `<h3> ${data.question} </h3><br>
        <form id= "quiz_answer_form">
        <input type = "radio" value = "true" name = "answer"> True</input><br>
        <input type = "radio" value = "false" name ="answer"> False </input><br>
        <input type = "submit" value= "submit">
        </form>
        <br>
        Score:${what}%`
    }
    else if(data.type == "fill in the blank")
    {
        quiz_question=
        `<h3> ${data.question} </h3>
        <form id = "quiz_answer_form">
        <input type= "text" name = "answer">
        <input type="submit" value="submit">
        </form>
        <br>
        Score:${what}%`
    }
    else if(data.type == "image")
    {
        quiz_question = 
        `<h3> ${data.question} </h3>
        <form id = "quiz_answer_form">
        <input type="radio" value="${data.choices[0]}" name = "answer"></input>
        <img src="${data.choices[0]}"><br>
        <input type="radio" value="${data.choices[1]}" name = "answer"></input>
        <img src="${data.choices[1]}"><br>
        <input type="radio" value="${data.choices[2]}" name = "answer"></input>
        <img src="${data.choices[2]}"><br>
        <input type= "submit" value = "submit">
        </form>
        Score:${what}%
        `
    }
        //document.getElementById().innerHTML= ""
    
        console.log(quiz_question)
     appState.question=quiz_question
}

function generateQuiz(data){
    console.log(appState.timePassed)
   getQuestion()
   console.log(appState.question)
    //usethis=getQuestion()
    //console.log(usethis)
    //generateQuestion
    quiz_question=generateQuestion(data[appState.counter]);
   // appState.correctAnswerForCurrentQuestion=data[appState.counter].answer;
    //appState.feedback=data[appState.counter].reason;
    //console.log(appState.feedback);
    //console.log(appState.correctAnswerForCurrentQuestion);
    document.querySelector("#start").style.display = 'none';
    document.querySelector("#feedback_view").style.display= 'none';
    document.querySelector("#quiz_view").innerHTML= appState.question;//generateQuestion(data[appState.counter]);
    document.querySelector("#quiz_view").style.display= 'block';
    if(appState.counter==1)
    {    
        document.querySelector("#timer").style.display='block';
        timer();
    }
    
    document.querySelector("#quiz_view").onsubmit =  () =>{
        appState.selectedAnswer=document.forms["quiz_answer_form"]["answer"].value;
        console.log(appState.selectedAnswer)
        jsoncheck();
        //check(appState.selectedAnswer)
        //feedback(response,data[i].reason)
       // document.querySelector("#quiz_view").style.display = 'none';
        //document.querySelector("#feedback_view").innerHTML= feedback_text;
        return false;
    }
}
let jsoncheck= async(url) =>{
    if(appState.quizno=="1")
    {
        const response = await fetch("http://localhost:3000/check_answer/" + appState.quizno + "/" +appState.counter + "/" +appState.selectedAnswer)
        const result = await response.json();
        console.log(result);
        appState.result=result;
        console.log(appState.result);
        check(appState.selectedAnswer)
    }
}

function check(userAnswer)
{
    document.querySelector("#quiz_view").style.display='none';
    document.querySelector("#feedback_view").style.display='none';
    // console.log(rightAnswer);
    console.log(appState.result.correct);
    if(appState.result.correct != null){
        appState.correct = appState.correct+1;
        appState.counter= appState.counter+1;
        goodFeedback()
    }
    else{
        appState.incorrect=appState.incorrect+1;
        appState.counter=appState.counter+1;
        badFeedback()
    }
    // if(rightAnswer== userAnswer){
    //     appState.correct=appState.correct+1;
    //     appState.counter=appState.counter+1;
    //     goodFeedback()
    // }
    // else{
    //     appState.incorrect=appState.incorrect+1;
    //     appState.counter=appState.counter+1;
    //     badFeedback()
        
    // }
}
function goodFeedback()
{
    let a= getRandomInt(3);
    console.log(a);
    document.querySelector("#quiz_view").style.display='none';
    document.querySelector("#feedback_view").style.display='block';
    if(a==0)
    {
        document.querySelector("#feedback_view").innerHTML=`<h1>Nice!</h1>`
        $('#feedback_view').delay(1000).fadeOut(300);
    }
    else if(a==1)
    {
        document.querySelector("#feedback_view").innerHTML=`<h1>Cool!</h1>`
        $('#feedback_view').delay(1000).fadeOut(300);
    }
    else if(a==2)
    {
        document.querySelector("#feedback_view").innerHTML=`<h1>Brilliant!</h1>`
        $('#feedback_view').delay(1000).fadeOut(300);
    }
    // document.querySelector("#feedback_view").innerHTML=`<h1>Nice</h1>`
    // $('#feedback_view').delay(1000).fadeOut(300);

    setTimeout(function() {
        if (appState.counter<=appState.quizLength){
            //getQuiz();
            getQuiz();
        }
        else {
            console.log("finished")
            console.log(appState)
            endingscreen()
        }
    },1500)
}
function badFeedback()
{
    document.querySelector("#quiz_view").style.display='none';
    document.querySelector("#feedback_view").style.display='block';
    if(appState.counter<=appState.quizLength){
        
    document.querySelector("#feedback_view").innerHTML=`<h1>Incorrect</h1>
     <p> ${appState.result.feedback} </p>
     <input type ="button" onclick=getQuiz() value = "Got It"> `
    }
    else{
        document.querySelector("#feedback_view").innerHTML=`<h1>Incorrect</h1>
        <p> ${appState.result.feedback} </p>
        <input type="button" onclick=endingscreen() value = "Got It">`
    }
}
//write logic for finding length with of the brought in quiz with the async function
function endingscreen()
{
    document.querySelector("#timer").style.display='none';
    console.log("does it even get here what is going on")
    document.querySelector("#quiz_view").style.display='none';
    document.querySelector("#feedback_view").style.display='none';
    document.querySelector("#quiz_complete").style.display='block';
    let grade=(appState.correct/appState.quizLength)
    let percentage = grade*100
    let cleanPercentage=percentage.toFixed(2)
    if(cleanPercentage >=80)
    {
    document.querySelector("#quiz_complete").innerHTML= 
    `<h1> Congratulations ${appState.name}! You have passed the test </h1><br>
    <h4> Your Score: ${percentage}%</h4><br>
    <h6>Correct: ${appState.correct}</h6><br>
    <h6>Incorrect: ${appState.incorrect}</h6><br>
    <h6>Total Seconds to complete: ${appState.completedTime}</h6><br>
    <input type = "button" onclick= retake() value= "Retake Quiz"> <input type= "button" onclick=other() value= "Main Menu">
    `
    }
    else
    {
    document.querySelector("#quiz_complete").innerHTML= 
    `<h1> Sorry ${appState.name}, you have failed the test </h1><br>
    <h4> Your Score: ${percentage}%</h4><br>
    <h6>Correct: ${appState.correct}</h6><br>
    <h6>Incorrect: ${appState.incorrect}</h6><br>
    <h6> Total Seconds to complete: ${appState.completedTime}</h6><br>
    <input type = "button" onclick= retake() value= "Retake Quiz"> <input type= "button" onclick=other() value= "Main Menu">
    `
    }
}
// take off displays
function retake()
{
    appState.counter=1;
    appState.correct=0;
    appState.incorrect=0;
    appState.currentScore=0;
    document.querySelector("#quiz_complete").style.display='none'
    getQuiz()
}
function other()
{
    //appState.quizno="quiz2";
    appState.counter=1;
    appState.correct=0;
    appState.incorrect=0;
    appState.currentScore=0;
    document.querySelector("#quiz_complete").style.display='none';
    document.querySelector("#start").style.display='block'
    
}

function timer(){
    clearInterval(time);
    let seconds = 0;

    time = setInterval(() => {
        seconds++;
        appState.completedTime=seconds;
        minutes = Math.floor(seconds/60);
        document.querySelector("#timer").textContent=`Timer: ${minutes}:${seconds%60}`
    }, 1000)

}

 function getRandomInt(max){

     return Math.floor(Math.random()*Math.floor(max));

 }

