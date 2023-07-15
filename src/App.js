import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [isClicked, setIsClicked] = useState(null);

  function handleClick(index) {
    setIsClicked(index === isClicked ? null : index);
  }
  return (
    <div className="accordion">
      {faqs.map((elem, index) => (
        <Item
          item={elem}
          click={isClicked}
          onClickItem={handleClick}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}

function Item({ item, click, onClickItem, index }) {
  const clickBool = click === index;
  return (
    <div
      className={`item ${clickBool ? "open" : ""}`}
      onClick={() => onClickItem(index)}
    >
      <p className="number">{index <= 9 ? `0${index + 1}` : index + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{clickBool ? "-" : "+"}</p>
      {clickBool && <div className="content-box text">{item.text}</div>}
    </div>
  );
}
