import Accordion from "./components/accordion/Accordion.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="a1"
            title="We got 20 years of experience"
            className="accordion-item"
          >
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the bussness.</p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="a2"
            title="We are working with local guides."
            className="accordion-item"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>We are in the bussness.</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
