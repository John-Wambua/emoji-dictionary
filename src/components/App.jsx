import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
        <dl className="dictionary">
        {emojipedia.map(cur=>
            <Entry key={cur.id}
                   name={cur.name}
                   emoji={cur.emoji}
                   meaning={cur.meaning}
            />
        )}
        </dl>
    </div>
  );
}

export default App;
