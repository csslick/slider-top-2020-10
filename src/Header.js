const Header = () => {
  const html = `
    <header>
      <h1>${document.title}</h1>
      <nav>
        <a href="./index.html">Home</a>
        <a href="./about.html">About</a>
      </nav>
    </header>
  `;
  return html;
};

export const title = "Header";
export default Header;