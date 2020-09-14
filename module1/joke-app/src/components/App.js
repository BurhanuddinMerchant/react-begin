import React from "react";
import Joke from "./Joke";
import jokesData from "../misc/jokesData";

function App() {
  const jokeComponents = jokesData.map((joke) => {
    return <Joke key={joke.id} question={joke.question} answer={joke.answer} />;
  });
  return <div>{jokeComponents}</div>;
}
export default App;
