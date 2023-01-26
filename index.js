// 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
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
//const { response } = require("express");


const configuration = new Configuration({
    organization: "org-e5axI5R10WN3BglDJaPFaYc3",
    apiKey: 
    "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",
});

const openai = new OpenAIApi(configuration);


// add body parser and corrs to express

const app = express()
app.use(bodyParser.json())
app.use(cors())
//can you please add cors to express


const port = 3080;

app.post('/', async (req,res)=> {

    const {message} = req.body;
    console.log(message, "message")
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });

    // console.log(message, "message");
    // const response = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: `${message}`,
    //     max_tokens: 100,
    //     temperature: 0.5,
    //   });
    //console.log(response.data.choices[0].text);
      res.json({
        message: response.data.choices[0].text,
      })
});



  // console.log(message, "message");
  // const response = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: `${message}`,
  //     max_tokens: 100,
  //     temperature: 0.5,
  //   });
  //console.log(response.data.choices[0].text);
    // res.json({
    //   message: response.data.choices[0].text,
    // })


app.listen(port, () => {
    console.log(`Example app listening at http:// localhost:${port}`)
})