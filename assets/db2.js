var data = {
        1:{
                "id":1,
                "question": "What does i++ do",
                "type" : "multiple choice",
                "choices": ["It increments the variable i in itself" , "It subtracts 1 from the variable i", "It adds 1 to the variable i","It does nothing"],
                "answer" : "It adds 1 to the variable i",
                "reason": "It's the third one.",
                meta : {
                    next_question: "2"
                }
            },
            2:{
                "id":2,
                "question": "What is a High Order function?",
                "type" : "multiple choice",
                "choices": ["Its input variables are specified in alphabetical order", "At least one of their input variables is a function", "It is defined using the arrow notation", "It is a function that does not manipulate its internal state."],
                "answer" : "At least one of their input variables is a function",
                "reason" : "It's the second one",
                meta : {
                    next_question: "3"
                }
            },
           3: {
                "id":3,
                "question" : "Use ____ to import other modules",
                "type" : "fill in the blank",
                "choices": [],
                "answer" : "import",
                "reason" : "you can use import",
                meta : {
                    next_question: "4"
                }
    
            },
           4: {
                "id":4,
                "question" : "Python is a high level programming language",
                "type" : "true false",
                "choices": ["true", "false"],
                "answer" : "true",
                "reason" : "This was true",
                meta : {
                    next_question: "5"
                }
            },
           5: {
                "id":5,
                "question": "what word do you use to make a for loop?",
                "type" : "short answer",
                "choices": [],
                "answer" : "for",
                "reason" : "You use for for a for loop",
                meta : {
                    next_question: "6"
                }
            },
            6:{
                "id":6,
                "question": "what word do you use to make a while loop?",
                "type" : "short answer",
                "choices": [],
                "answer" : "while",
                "reason" : "You use while for a while loop",
                meta : {
                    next_question: "7"
                }
            },
           7: {
                "id":7,
                "question": "Python is a _____",
                "type" : "multiple choice",
                "choices": ["function","programming language", "form","style"],
                "answer" : "programming language",
                "reason" : "Python is a programming language.  It's the second one",
                meta : {
                    next_question: "8"
                }
            },
         8:   {
                "id":8,
                "question": "Which is the icon for C++?",
                "type" : "image",
                "choices": ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png","https://i7.pngguru.com/preview/46/626/460/the-c-programming-language-computer-icons-computer-programming-source-code-programming.jpg"],
                "answer" : "https://i7.pngguru.com/preview/46/626/460/the-c-programming-language-computer-icons-computer-programming-source-code-programming.jpg",
                "reason" : "It's the third one",
                meta : {
                    next_question: "9"
                }
            },
           9: {
                "id":9,
                "question": "HTML is a _____",
                "type" : "multiple choice",
                "choices": ["div","query", "markup language","id"],
                "answer" : "markup language",
                "reason" : "You use for for a for loop",
                meta : {
                    next_question: "10"
                }
            },
            10:{
                "id":10,
                "question": "Which is the icon for C#?",
                "type" : "image",
                "choices": ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png","https://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png"],
                "answer" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png",
                "reason" : "It's the second one",
                meta : {
                    next_question: "11"
                }
            },
           11: {
                "id":11,
                "question": "Which is the icon for javascript?",
                "type" : "image",
                "choices" :["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png","https://img.favpng.com/16/10/16/python-javascript-logo-clojure-png-favpng-3x1GWHfajrTRuNP9cpdDLjbcc.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"],
                "answer" : "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                "reason" : "It's the first one",
                meta : {
                    next_question: "12"
                }
            },
          12:  {
                "id":12,
                "question": "A ____ is a Python object with arbitrarily named attributes that you can bind and reference.",
                "type" : "fill in the blank",
                "choices" : [],
                "answer" : "module",
                "reason" : "The answer is 'module'",
                meta : {
                    next_question: "13"
                }
            },
           13: {
                "id":13,
                "question": "Booleans are a data type that is either true or false",
                "type" : "true false",
                "choices" : ["true", "false"],
                "answer" : "true",
                "reason" : "The answer is true",
                meta : {
                    next_question: "14"
                }
            },
            14:{
                "id":14,
                "question": "To get user input in python, use the command input() and store the result in a variable",
                "type" : "true false",
                "choices" : ["true", "false"],
                "answer" : "true",
                "reason" : "The answer is true",
                meta : {
                    next_question: "15"
                }
            },
           15: {
                "id":15,
                "question": "A ____ is a Python data type with one or more characters put in quotations",
                "type" : "fill in the blank",
                "choices" : [],
                "answer" : "string",
                "reason" : "The answer is 'string'",
                meta : {
                    next_question: "16"
                }
            },
           16: {
                "id":16,
                "question": "A python ____ function behaves like a normal function in regard to arguments.",
                "type" : "multiple choice",
                "choices" : ["lambda","list","string","import"],
                "answer" : "lambda",
                "reason" : "The answer is 'lambda'",
                meta : {
                    next_question: "17"
                }
            },
           17: {
                "id":17,
                "question": "There is no such thing as inheritance in python.",
                "type" : "true false",
                "choices" : [],
                "answer" : "false",
                "reason" : "There is such thing as inheritance in python.  Class properties can be inherited from other classes",
                meta : {
                    next_question: "18"
                }
            },
          18:  {
                "id":18,
                "question": "You can convert a JSON element into something readable in python by using the loads method",
                "type" : "true false",
                "choices" : ["true", "false"],
                "answer" : "true",
                "reason" : "The answer is true",
                meta : {
                    next_question: "19"
                }
            },
            19:{
                "id":19,
                "question": "There is no such thing as an integer data type in python",
                "type" : "true false",
                "choices" : ["true", "false"],
                "answer" : "false",
                "reason" : "The answer is false",
                meta : {
                    next_question: "20"
                }
            },
            20:{
                "id":20,
                "question": "What is another term for an array in python",
                "type" : "short answer",
                "choices" : [],
                "answer" : "list",
                "reason" : "The answer is list",
                meta : {
                    next_question : "-1"
                }
            }
}
module.exports.data=data
// quiz2:[
    //     {
    //         "id":1,
    //         "question": "What does i++ do",
    //         "type" : "multiple choice",
    //         "choices": ["It increments the variable i in itself" , "It subtracts 1 from the variable i", "It adds 1 to the variable i","It does nothing"],
    //         "answer" : "It adds 1 to the variable i",
    //         "reason": "It's the third one.",
    //         meta : {
    //             next_question: "2"
    //         }
    //     },
    //     {
    //         "id":2,
    //         "question": "What is a High Order function?",
    //         "type" : "multiple choice",
    //         "choices": ["Its input variables are specified in alphabetical order", "At least one of their input variables is a function", "It is defined using the arrow notation", "It is a function that does not manipulate its internal state."],
    //         "answer" : "At least one of their input variables is a function",
    //         "reason" : "It's the second one",
    //         meta : {
    //             next_question: "3"
    //         }
    //     },
    //     {
    //         "id":3,
    //         "question" : "Use ____ to import other modules",
    //         "type" : "fill in the blank",
    //         "choices": [],
    //         "answer" : "import",
    //         "reason" : "you can use import",
    //         meta : {
    //             next_question: "4"
    //         }

    //     },
    //     {
    //         "id":4,
    //         "question" : "Python is a high level programming language",
    //         "type" : "true false",
    //         "choices": ["true", "false"],
    //         "answer" : "true",
    //         "reason" : "This was true",
    //         meta : {
    //             next_question: "5"
    //         }
    //     },
    //     {
    //         "id":5,
    //         "question": "what word do you use to make a for loop?",
    //         "type" : "short answer",
    //         "choices": [],
    //         "answer" : "for",
    //         "reason" : "You use for for a for loop",
    //         meta : {
    //             next_question: "6"
    //         }
    //     },
    //     {
    //         "id":6,
    //         "question": "what word do you use to make a while loop?",
    //         "type" : "short answer",
    //         "choices": [],
    //         "answer" : "while",
    //         "reason" : "You use while for a while loop",
    //         meta : {
    //             next_question: "7"
    //         }
    //     },
    //     {
    //         "id":7,
    //         "question": "Python is a _____",
    //         "type" : "multiple choice",
    //         "choices": ["function","programming language", "form","style"],
    //         "answer" : "programming language",
    //         "reason" : "Python is a programming language.  It's the second one",
    //         meta : {
    //             next_question: "8"
    //         }
    //     },
    //     {
    //         "id":8,
    //         "question": "Which is the icon for C++?",
    //         "type" : "image",
    //         "choices": ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1024px-Ruby_logo.svg.png","https://i7.pngguru.com/preview/46/626/460/the-c-programming-language-computer-icons-computer-programming-source-code-programming.jpg"],
    //         "answer" : "https://i7.pngguru.com/preview/46/626/460/the-c-programming-language-computer-icons-computer-programming-source-code-programming.jpg",
    //         "reason" : "It's the third one",
    //         meta : {
    //             next_question: "9"
    //         }
    //     },
    //     {
    //         "id":9,
    //         "question": "HTML is a _____",
    //         "type" : "multiple choice",
    //         "choices": ["div","query", "markup language","id"],
    //         "answer" : "markup language",
    //         "reason" : "You use for for a for loop",
    //         meta : {
    //             next_question: "10"
    //         }
    //     },
    //     {
    //         "id":10,
    //         "question": "Which is the icon for C#?",
    //         "type" : "image",
    //         "choices": ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png","https://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png"],
    //         "answer" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png",
    //         "reason" : "It's the second one",
    //         meta : {
    //             next_question: "11"
    //         }
    //     },
    //     {
    //         "id":11,
    //         "question": "Which is the icon for javascript?",
    //         "type" : "image",
    //         "choices" :["https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png","https://img.favpng.com/16/10/16/python-javascript-logo-clojure-png-favpng-3x1GWHfajrTRuNP9cpdDLjbcc.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"],
    //         "answer" : "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    //         "reason" : "It's the first one",
    //         meta : {
    //             next_question: "12"
    //         }
    //     },
    //     {
    //         "id":12,
    //         "question": "A ____ is a Python object with arbitrarily named attributes that you can bind and reference.",
    //         "type" : "fill in the blank",
    //         "choices" : [],
    //         "answer" : "module",
    //         "reason" : "The answer is 'module'",
    //         meta : {
    //             next_question: "13"
    //         }
    //     },
    //     {
    //         "id":13,
    //         "question": "Booleans are a data type that is either true or false",
    //         "type" : "true false",
    //         "choices" : ["true", "false"],
    //         "answer" : "true",
    //         "reason" : "The answer is true",
    //         meta : {
    //             next_question: "14"
    //         }
    //     },
    //     {
    //         "id":14,
    //         "question": "To get user input in python, use the command input() and store the result in a variable",
    //         "type" : "true false",
    //         "choices" : ["true", "false"],
    //         "answer" : "true",
    //         "reason" : "The answer is true",
    //         meta : {
    //             next_question: "15"
    //         }
    //     },
    //     {
    //         "id":15,
    //         "question": "A ____ is a Python data type with one or more characters put in quotations",
    //         "type" : "fill in the blank",
    //         "choices" : [],
    //         "answer" : "string",
    //         "reason" : "The answer is 'string'",
    //         meta : {
    //             next_question: "16"
    //         }
    //     },
    //     {
    //         "id":16,
    //         "question": "A python ____ function behaves like a normal function in regard to arguments.",
    //         "type" : "multiple choice",
    //         "choices" : ["lambda","list","string","import"],
    //         "answer" : "lambda",
    //         "reason" : "The answer is 'lambda'",
    //         meta : {
    //             next_question: "17"
    //         }
    //     },
    //     {
    //         "id":17,
    //         "question": "There is no such thing as inheritance in python.",
    //         "type" : "true false",
    //         "choices" : [],
    //         "answer" : "false",
    //         "reason" : "There is such thing as inheritance in python.  Class properties can be inherited from other classes",
    //         meta : {
    //             next_question: "18"
    //         }
    //     },
    //     {
    //         "id":18,
    //         "question": "You can convert a JSON element into something readable in python by using the loads method",
    //         "type" : "true false",
    //         "choices" : ["true", "false"],
    //         "answer" : "true",
    //         "reason" : "The answer is true",
    //         meta : {
    //             next_question: "19"
    //         }
    //     },
    //     {
    //         "id":19,
    //         "question": "There is no such thing as an integer data type in python",
    //         "type" : "true false",
    //         "choices" : ["true", "false"],
    //         "answer" : "false",
    //         "reason" : "The answer is false",
    //         meta : {
    //             next_question: "20"
    //         }
    //     },
    //     {
    //         "id":20,
    //         "question": "What is another term for an array in python",
    //         "type" : "short answer",
    //         "choices" : [],
    //         "answer" : "list",
    //         "reason" : "The answer is list",
    //         meta : {
    //             next_question : "-1"
    //         }
    //     }
        
        
    // ]