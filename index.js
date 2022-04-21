const express = require('express')

const app = express()

app.use(express.json())

let resultsCalculator = []



app.get('/calculator', (req, res) => {
    res.status(200).json({resultsCalculator})
})


app.post('/addition', (req, res) => {
    let { value1, value2} = req.body

    let resultValue1 = Number(value1)
    let resultValue2 = Number(value2)

    let resultAddition = resultValue1 + resultValue2

    res.status(201).json(resultAddition)

})

app.post('/subtraction', (req, res) => {
    let { value1, value2} = req.body

    let resultValue1 = Number(value1)
    let resultValue2 = Number(value2)
    
    let resultSubtraction = resultValue1 - resultValue2

   res.status(201).json(resultSubtraction)


})


app.post('/division', (req, res) => {
    let { value1, value2} = req.body

    let resultValue1 = Number(value1)
    let resultValue2 = Number(value2)


    let resultDivision = resultValue1 / resultValue2

    res.status(200).json(resultDivision)

    


})


app.post('/multiplication', (req, res) => {
    let { value1, value2 } = req.body

    let resultValue1 = Number(value1)
    let resultValue2 = Number(value2)
    
    let resultMultiplication = resultValue1 * resultValue2

    res.status(201).json(resultMultiplication)


})








app.listen(3000, () => {
    console.log('O servidor foi iniciado na URL: http://localhost:3000')
})