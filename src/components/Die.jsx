import "./Die.css";

export default function Die({ value, isHeld, clickFunction }) {
  return (
    <button
      onClick={clickFunction}
      className={isHeld ? "held" : null}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value},
            ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}
