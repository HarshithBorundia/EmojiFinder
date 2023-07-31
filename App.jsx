import React from "react";
import Term from "./Term";
import Emoji from "./emojipedia";

function createTerm(emoji) {
  return (
    <Term
      key={emoji.emoji} // Use a unique property as the key
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emoji.map(createTerm)}
      </dl>
    </div>
  );
}

export default App;
