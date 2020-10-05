import img01 from './imgs/img01.jpg';
import img02 from './imgs/img02.jpg';

const Main = () => {
  const html = `
    <section class="home_main">
      <article>
        <img src=${img02} />
        <img src=${img01} />
      </article>
      <article>
        <img src=${img01} />
        <img src=${img02} />
      </article>
    </section>
  `;
  return html;
};

export default Main;





