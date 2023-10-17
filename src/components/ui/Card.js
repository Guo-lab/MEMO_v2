import classes from "./Card.module.css";


// Children props are received by every component by default.
// Children holds the content between the opening and closing tags of a component.

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
