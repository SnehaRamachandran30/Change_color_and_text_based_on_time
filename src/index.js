//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
var React = require("react");
var ReactDom = require("react-dom");
const date = new Date();
const hour = date.getHours();
let value;
const customStyle = {
  color: "yellow"
};
if (hour <= 11) {
  value = "Good Morning";
  customStyle.color = "lightblue";
} else if (hour >= 12 && hour <= 14) {
  value = "Good Afternoon";
  customStyle.color = "yellow";
} else if (hour >= 14 && hour < 19) {
  value = "Good Evening";
  customStyle.color = "orangered";
} else {
  value = "Good Night";
  customStyle.color = "darkblue";
}
ReactDom.render(
  <h1 className="heading" style={customStyle}>
    {value}
  </h1>,
  document.getElementById("root")
);
