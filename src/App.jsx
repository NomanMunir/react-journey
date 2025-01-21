import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = "Please select the tab.";
  if (selectedTopic)
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );

  function onSelectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelectHandler("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => onSelectHandler("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => onSelectHandler("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => onSelectHandler("state")}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
