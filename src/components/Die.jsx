import "./Die.css";

export default function Die({ value, isHeld, clickFunction }) {
  return (
    <button onClick={clickFunction} className={isHeld ? "held" : null}>
      {value}
    </button>
  );
}
