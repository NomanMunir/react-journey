import { useAcordionContext } from "./Accordion";

export default function AccordionItem({ id, title, children, className }) {
  const { openItemId, toggleItem } = useAcordionContext();

  const isOpen = openItemId === id;
  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
