import React, { useState } from "react";

let playerList = [
  { id: 1, name: "Timo Werner" },
  { id: 2, name: "Hakim Ziyech" },
  { id: 3, name: "Kay Havertz" },
  { id: 4, name: "Ben Chilwell" },
];

const IterationSample = () => {
  const [inputText, setInputText] = useState("");
  const [players, setPlayers] = useState(playerList);
  const [nextId, setNextId] = useState(players.length + 1);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const addPlayer = players.concat({
      id: nextId,
      name: inputText,
    });
    setPlayers(addPlayer);
    setInputText("");
    setNextId(nextId + 1);
  };

  const removePlayer = (playerId) => {
    const newPlayerList = players.filter((player) => player.id !== playerId);
    setPlayers(newPlayerList);
  };

  const inputPlayers = players.map((player) => (
    <li key={player.id} onDoubleClick={() => removePlayer(player.id)}>
      {player.name}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{inputPlayers}</ul>
    </div>
  );
};

export default IterationSample;
