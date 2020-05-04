//testing
var express = require("express")
var app= express()

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

app.get('/quiz1/:questionid',(req,res) => {
    var q_id = req.params['questionid'];
    returning = quizdata[q_id]
    res.json(returning)
})
app.get('/quiz2/:questionid',(req,res) => {
    var q_id = req.params['questionid'];
    // save filtering maybe for another solution.  GOING TO THE NEXT QUESTOIN   
    returning = quizdata["quiz2"].filter(q => q.id == q_id)
    res.json(returning)
})

app.listen(3000, function(){
    console.log('listening to port 3000');
});
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin' , '*');
    next();
});
