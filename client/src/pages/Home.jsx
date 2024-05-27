import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import Select from "react-select";
import "./Home.css";

const Home = () => {
  const [userCode, setUserCode] = useState(``);
  const [userLanguage, setUserLanguage] = useState("cpp");
  const [userTheme, setUserTheme] = useState("vs-dark");
  const [fontSize, setFontSize] = useState(22);
  const [userInput, setUserInput] = useState("");
  const [userOutput, setUserOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize,
  };

  function compile() {
    setLoading(true);
    if (userCode === ``) {
      return;
    }
    // post request to compile endpoint
    axios
      // .post(`http://localhost:4000/compile`, {
      .post(`https://code-pilot.onrender.com`, {
        code: userCode,
        language: userLanguage,
        input: userInput,
      })
      .then((res) => {
        setUserOutput(res.data.output);
      })
      .then(() => {
        setLoading(false);
      });
  }

  function clearOutput() {
    setUserOutput("");
  }

  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "csharp", label: "C#" },
    { value: "nodejs", label: "NodeJS" },
    { value: "php", label: "PHP" },
    { value: "java", label: "Java" },
  ];

  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "vs-light", label: "Light" },
  ];

  return (
    <div className="container max-h-[100vh]">
      <div className="flex gap-5 mt-4 p-4 flex-col sm:flex-row">
        <div className="show-box relative sm:w-[80%]">
          <Editor
            options={options}
            height="calc(30rem - 10px)"
            width="100%"
            theme={userTheme}
            language={userLanguage}
            defaultLanguage="cpp"
            defaultValue="// Enter your code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          {loading ? (
            <div></div>
          ) : (
            <button
              className="absolute bottom-3 right-6 w-16 h-16 rounded-full font-semibold bg-red-600 text-black"
              onClick={() => compile()}
            >
              Run
            </button>
          )}
        </div>

        <div className="show-box flex sm:flex-col bg-btn-bg p-2 sm:w-[20%] rounded-2xl">
          {/* input */}
          <div className="p-2 flex flex-col gap-4 w-[50%] sm:w-full sm:h-[50%]">
            <h4 className="text-xl font-bold">Input:</h4>
            <div className="text-center h-[80%]">
              <textarea
                id="code-inp"
                className="bg-textA-bg text-textA-text text-base w-full h-full rounded-md p-2"
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* output */}
          <div className="p-2 flex flex-col gap-4 w-[50%] sm:w-full sm:h-[50%]">
            <h4 className="text-xl font-bold">Output:</h4>
            {loading ? (
              <div className="bg-textA-bg text-textA-text text-base w-full h-full rounded-md p-2">
                Loading
              </div>
            ) : (
              <div className="relative bg-textA-bg text-textA-text text-base w-full h-full rounded-md p-2">
                <pre>{userOutput}</pre>
                <button
                  onClick={() => {
                    clearOutput();
                  }}
                  className="absolute bottom-3 right-3 w-10 h-10 text-sm rounded-full font-semibold bg-red-600 text-black"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 sm:mt-10 flex-col sm:justify-evenly sm:flex-row">
        <div className="flex items-center gap-4">
          <label className="text-lg font-bold tracking-wide">Languages</label>
          <Select
            options={languages}
            value={userLanguage}
            onChange={(e) => setUserLanguage(e.value)}
            placeholder={userLanguage}
            className="text-black"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-lg font-bold tracking-wide">Theme</label>
          <Select
            options={themes}
            value={userTheme}
            onChange={(e) => setUserTheme(e.value)}
            placeholder={userTheme}
            className="text-black"
          />
        </div>
        <div className="flex items-center gap-4">
          <label className="text-lg font-bold tracking-wide">Font Size</label>
          <input
            type="range"
            value={fontSize}
            onChange={(e) => {
              setFontSize(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
