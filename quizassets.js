const appState={
    counter:0,
    correct:0,
    incorrect:0,
    name:'',
    quizno: '',
    selectedAnswer:'',
    correctAnswerForCurrentQuestion:'',
    feedback:''
    
}
document.addEventListener('DOMContentLoaded', () =>{
    

})
let getQuiz= async(url) =>{
    
        const response= await fetch("https://my-json-server.typicode.com/mmmnice/indiv_project_db/" +appState.quizno)
        const result = await response.json();
        console.log(result);
        generateQuiz(result);
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
function generateQuestion(data){
    console.log(data.answer)
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
            <input type = "submit" value = "submit"></input>
           
        </form>`
        
    }
    
    else if(data.type== "short answer")
    {
        quiz_question =
        `<h3> ${data.question}</h3>
        <form id= quiz_answer_form>
        <input type= "text" name ="answer">
        <input type="submit" value="submit">
        </form>`

    }
    else if(data.type == "true false")
    {
        quiz_question=
        `<h3> ${data.question} </h3>
        <form id= "quiz_answer_form">
        <input type = "radio" value = "true" name = "answer"> True</input><br>
        <input type = "radio" value = "false" name ="answer"> False </input>
        <input type = "submit" value= "submit">
        </form>`
    }
        //document.getElementById().innerHTML= ""
    
        console.log(quiz_question)
    return quiz_question
}

function generateQuiz(data){
    quiz_question=generateQuestion(data[appState.counter]);
    appState.correctAnswerForCurrentQuestion=data[appState.counter].answer;
    appState.feedback=data[appState.counter].reason;
    console.log(appState.feedback);
    //console.log(appState.correctAnswerForCurrentQuestion);
    document.querySelector("#start").style.display = 'none';
    document.querySelector("#feedback_view").style.display= 'none';
    document.querySelector("#quiz_view").innerHTML= generateQuestion(data[appState.counter]);
    document.querySelector("#quiz_view").style.display= 'block';
    
    document.querySelector("#quiz_view").onsubmit =  () =>{
        appState.selectedAnswer=document.forms["quiz_answer_form"]["answer"].value;
        console.log(appState.selectedAnswer)
        check(appState.correctAnswerForCurrentQuestion, appState.selectedAnswer)
        //feedback(response,data[i].reason)
        document.querySelector("#quiz_view").style.display = 'none';
        //document.querySelector("#feedback_view").innerHTML= feedback_text;
        return false;
    }
}

function check(rightAnswer,userAnswer)
{
    console.log(rightAnswer);
    console.log(userAnswer);
    if(rightAnswer== userAnswer){
        appState.correct=appState.correct+1;
        appState.counter=appState.counter+1;
        goodFeedback()
    }
    else{
        appState.incorrect=appState.incorrect+1;
        appState.counter=appState.counter+1;
        badFeedback()
        //write about the feedback here
    }
}
//MAKE SURE YOU DO THE SECOND OF POSITIVE REINFORCEMENT.  YOU ALSO MUST STILL DO THE FEEDBACK VIEW FOR GETTING SOMETHING WRONG.
function goodFeedback()
{
    getQuiz();
}


