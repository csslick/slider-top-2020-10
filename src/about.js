import Header from "./Header";
import Main from "./Main";

const layout = `
  ${Header()}
  ${Main()}
`;

document.getElementById("app").innerHTML = layout;
