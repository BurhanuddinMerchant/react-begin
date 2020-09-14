import React from "react";
//here {components} is basically a prop which is just shorthanded
function Joke({ question, answer }) {
  let question_string = "Question : ";
  if (question == null) {
    question_string = "";
  }
  return (
    <div>
      <h2>
        {question_string} {question}
      </h2>
      <h3>Answer : {answer}</h3>
    </div>
  );
}
export default Joke;
