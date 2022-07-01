const { request, response } = require('express');
const express = require('express');
const app = express();
const PORT = 8000;



const mathAPI = {

    '6th grade' : {
        'Grade 6 Overview': `In Grade 6, instructional time should focus on five areas: (1) connecting ratio and rate to whole number multiplication and division and using concepts of ratio and rate to solve
        problems; (2) completing understanding of division of fractions and extending the notion of number to the system of rational numbers, which includes negative numbers; (3)
        writing, interpreting, and using expressions and equations; (4) deepening understanding of area, surface area and volume; and (5) developing understanding of simple
        probabilities and statistical thinking. Please note that while every standard/topic in the grade level has not been included in this overview, all standards should be included in
        instruction.`
    },

    '7th grade' : {
        'Grade 7 Overview': `In Grade 7, instructional time should focus on three areas: (1) developing understanding of and applying proportional relationships; (2) developing understanding of operations
        with rational numbers and working with expressions and linear equations; and (3) drawing inferences about populations based on samples. Please note that while every
        standard/topic in the grade level has not been included in this overview, all standards should be included in instruction.`,
    },
    
    'mathematical practices': `1. Make sense of problems and persevere in solving them.
    2. Reason abstractly and quantitatively.
    3. Construct viable arguments and critique the reasoning of others.
    4. Model with mathematics.
    5. Use appropriate tools strategically.
    6. Attend to precision.
    7. Look for and make use of structure.
    8. Look for and express regularity in repeated reasoning.`,
    
    'request error': 'Request Error'
}

app.get('/', (request, response)=> {
  response.sendFile(__dirname + '/index.html')  
})

app.get('/api/:mathInfo', (request, response)=> {
    const mathInfoRequest = request.params.mathInfo.toLowerCase()
    //no dot notation since it has names have spaces
    if (mathAPI[mathInfoRequest]){
        response.json(mathAPI[mathInfoRequest]) 
    } else {
        response.json(mathAPI['request error']) 
    }

    //response.json(mathAPI)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT ${PORT}!`)
})

