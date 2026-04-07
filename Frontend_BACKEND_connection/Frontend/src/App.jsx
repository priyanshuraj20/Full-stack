import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes") //hum proxy laga dete :domain append toh hota aur saath hi saath ,  Browser ko lagta hai request same origin se aa rahi hai 
      .then((response) => {
        console.log(response);
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Chai Aur FullStack!</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.category}</h3>
          <p>{joke.joke}</p>
          <p>{joke.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
