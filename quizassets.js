const appState={
    counter:0,
    correct:0,
    incorrect:0,
    name:'',
    quizno: '',
    selectedAnswer:''
    
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
    //appState.current_correct_answer=data.correct_answer
    console.log(data)
    if(data.type=="multiple choice")
    {
        quiz_question = 
        `<h3>${data.question}</h3>
        <form id = "quiz_answer_form">
            <input type="radio" value = "${data.choices[0]}" name = "answer1"></input>
            <label for = "answer1"> ${data.choices[0]} </label><br>
            <input type="radio" value = "${data.choices[1]}" name = "answer2"></input>
            <label for = "answer2"> ${data.choices[1]} </label><br>
            <input type="radio" value = "${data.choices[2]}" name = "answer3"></input>
            <label for = "answer3"> ${data.choices[2]} </label><br>
            <input type = "submit" value = "submit"></input>
           
        </form>`
        
    }
    
    else if(data.type= "short answer")
    {
        quiz_question =
        `<h3> ${data.question}</h3>
        <form id= quiz_answer_form>
        <input type= "text">
        <input type="submit" value="submit">
        </form>`

    }
    else if(data.type = "true false")
    {
        quiz_question=
        `<h3> ${data.question} </h3>
        <form id= "quiz_answer_form">
        <input type = "radio" value = "true"> True</input><br>
        <input type = "radio" value = "false> False </input>
        </form>`
    }
        //document.getElementById().innerHTML= ""
    
        console.log(quiz_question)
    return quiz_question
}

function generateQuiz(data){
    quiz_question=generateQuestion(data[appState.counter]);
    document.querySelector("#quiz_view").innerHTML=`<h1> does this work?</h1>`
    document.querySelector("#start").style.display = 'none';
    document.querySelector("#feedback_view").style.display= 'none';
    document.querySelector("#quiz_view").innerHTML= generateQuestion(data[appState.counter]);
    document.querySelector("#quiz_view").style.display= 'block';
    
    document.querySelector("#quiz_view").onsubmit =  () =>{
        appState.selectedAnswer=document.forms["quiz_answer_form"]["answer"].value;
        console.log(appState.selected_answer)
        check(appState.current_correct_answer, appState.selected_answer)
        feedback(response,data[i].reason)
        document.querySelector("#quiz_view").style.display = 'none';
        document.querySelector("#feedback_view").innerHTML= feedback_text;
        return false;
    }
}

function check(rightAnswer,userAnswer)
{
    if(rightAnswer== userAnswer){
        appState.correct=appState.correct+1;
        appState.counter=appState.counter+1;
    }
    else{
        appState.incorrect=appState.incorrect+1;
        //write about the feedback here
    }
}


