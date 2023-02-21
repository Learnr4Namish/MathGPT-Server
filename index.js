const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors(
    {
        origin:"*"
    }
))
app.use(bodyParser.urlencoded({extended:"false"}));
app.use(bodyParser.json());
app.post("/resp", (req, res)=> {
    const question = req.body.question;
    var words = question.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    console.log(words);
    if(words[0] === 'find' || String(words[0]).includes("find") || words[0] === 'Find' || String(words[0]).includes("Find")) {
        if(words[1] === "the" || String(words[1]).includes("the")) {
            if(words[2] === "sum" || String(words[2]).includes("sum")) {
                if(words[3] === "of" || String(words[3]).includes("of")) {
                    const Number1 = Number(words[4]);
                    if(words[5] === "and" || String(words[5]).includes("and")) {
                    const Number2 = Number(words[6]);
                    res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their sum is Number1 + Number2 = ${Number1} + ${Number2} = ${Number2 + Number1}`)
            }else if(words[5] === "+" || String(words[5]).includes("+")) {
                   const Number2 = Number(words[6]);
                   res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their sum is Number1 + Number2 = ${Number1} + ${Number2} = ${Number1 + Number2}`)
            }
                }
            }else if(words[2] === "difference" || String(words[2]).includes("difference")) {
                if(words[3] === "between" || String(words[3]).includes("between")) {
                    const Number1 = Number(words[4]);
                    if(words[5] === "and" || String(words[5]).includes("and")) {
                    const Number2 = Number(words[6]);
                    res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their difference is Number1 - Number2 = ${Number1} - ${Number2} = ${Number1 - Number2}`)
            }else if(words[5] === "+" || String(words[5]).includes("+")) {
                   const Number2 = Number(words[6]);
                   res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their difference is Number1 - Number2 = ${Number1} - ${Number2} = ${Number1- Number2}`)
            }
                }
            }
        }else if(words[1] === "sum" || String(words[1]).includes("sum")) {
            if(words[2] === "of" || String(words[2]).includes("of")) {
                const Number1 = Number(words[3]);
                if(words[4] === "and" || String(words[4]).includes("and")) {
                const Number2 = Number(words[5]);
                res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their sum is Number1 + Number2 = ${Number1} + ${Number2} = ${Number1 + Number2}`)
        }else if(words[4] === "+" || String(words[4]).includes("+")) {
               const Number2 = Number(words[5]);
               res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their sum is Number1 + Number2 = ${Number1} + ${Number2} = ${Number1 + Number2}`)
        }
            }
        }else if(words[1] === "difference" || String(words[1]).includes("difference")) {
            if(words[2] === "between" || String(words[2]).includes("between")) {
                const Number1 = Number(words[3]);
                if(words[4] === "and" || String(words[4]).includes("and")) {
                const Number2 = Number(words[5]);
                res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their difference is Number1 - Number2 = ${Number1} - ${Number2} = ${Number1 - Number2}`)
        }else if(words[4] === "+" || String(words[4]).includes("+")) {
               const Number2 = Number(words[5]);
               res.end(`Solution: \n First number is ${Number1}\nSecond Number is ${Number2}\nSo, their difference is Number1 - Number2 = ${Number1} - ${Number2} = ${Number1 - Number2}`)
        }
            }
        }
    }else{
        res.send("Invalid question! This question is not valid or MathGPT is not trained enough to answer such kinds of questions. If you think this is an error, Please send a feedback and this error will be thoroughly reviewed. Thank you!");
    }
});
app.listen(7391 || process.env.PORT, "0.0.0.0", () => {
    console.log("Server successfully started on the environment port");
})