const express = require("express");
const cors = require("cors");
const axios = require("axios");
const PORT = 4000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
  // get the required data
  let code = req.body.code;
  let language = req.body.language;
  let input = req.body.input;

  if (language === "cpp") {
    language = "cpp";
  }

  let data = {
    code: code,
    language: language,
    input: input,
  };

  let config = {
    method: "post",
    url: "https://online-code-compiler.p.rapidapi.com/v1/",
    headers: {
      "Content-type": "application/json",
      "X-RapidAPI-Key": "1a65f518fbmsh1f062a29b0f6fa9p16a0b8jsnb89d9ccdb56a",
      "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
    },
    data: data,
  };

  // calling the code compilation api
  axios(config)
    .then((response) => {
      res.send(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening to Port: ${PORT}`);
});

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "server is up",
  });
});
