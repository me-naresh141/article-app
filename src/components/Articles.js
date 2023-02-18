import Card from "./Card";
import data from "../data.json";
function Articles() {
  return (
    <div className="article-div">
      {data.map((card) => (
        <Card key={card.author} {...card} />
      ))}
    </div>
  );
}
export default Articles;
