//testing


var express = require("express")
var app= express()
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin' , '*');
    next();
});
const dataset = require('./db');
const datalist = require('./quizlist');
const dataset2=require('./db2');
const quizdata2=dataset2.data;
const quizdata=dataset.data;
const quizlist=datalist.quiz_list;

app.get('/quiz1', (req,res) => {
    res.json(quizdata)
})
app.get('/quiz2', (req,res) => {
    res.json(quizdata2)
})
app.get('/list', (req,res) => {
    res.json(quizlist)
})
app.get('/quiz/:quizid', (req,res) => {
    var idd= req.params['quizid'];
    if(idd==1)
    {
        res.json(quizdata);
    }
    else if(idd==2)
    {
        res.json(quizdata2);
    }

})
app.get('/quiz/:quizid/:questionid', (req,res) => {
    var idd= req.params['quizid'];
    var q_id= req.params['questionid'];
    if(idd==1)
    {
        res.json(quizdata[q_id]);
    }
    else if(idd==2)
    {
        res.json(quizdata2[q_id]);
    }

})
app.get('/check_answer/:quizid/:questionid/:answer', (req,res) => {
    let response = {
        correct: null,
        feedback: '',

    }
    var id=req.params['quizid'];
    var q_id= req.params['questionid'];
    var personanswer= req.params['answer'];
    //res.json(quizdata)
    if(id==1)
    {
        questionAnswer=quizdata[q_id].answer;
        if(personanswer==questionAnswer)
        {
            response.correct=true;
            res.json(response)
        }
        else{
            response.feedback=quizdata[q_id].reason;
            res.json(response)
        }

        
    }
    else if (id==2)
    {
        questionAnswer=quizdata[q_id].answer;
        if(personanswer==questionAnswer)
        {
            console.log('correct!')
        }
        else{
            console.log('wrong!')
        }
    }
})

app.get('/quiz2/:questionid',(req,res) => {
    var q_id = req.params['questionid'];
    // save filtering maybe for another solution.  GOING TO THE NEXT QUESTOIN   
    returning = quizdata["quiz2"].filter(q => q.id == q_id)
    res.json(returning)
})

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('listening to port 3000');
});



