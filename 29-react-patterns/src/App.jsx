import Accordion from "./components/accordion/Accordion.jsx";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="a1" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can&apos;t go wrong with us.</p>
                <p>We are in the bussness.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="a2" title="" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We are working with local guides.
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office.</p>
                <p>We are in the bussness.</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
