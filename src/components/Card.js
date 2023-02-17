import data from "../data.json";
function Card(props) {
  return data.map((card) => (
    <div className="article-card">
      <figure>
        <img src={card.urlToImage} alt="img"></img>
      </figure>
      <p className="article-title">{card.title}</p>
    </div>
  ));
}
export default Card;
