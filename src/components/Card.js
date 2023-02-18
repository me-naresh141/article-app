import PropTypes from "prop-types";
function Card(props) {
  return (
    // <div className="article-div">
    <div className="article-card">
      <figure>
        <img src={props.urlToImage} alt={props.author}></img>
      </figure>
      <div className="article-title">
        <p>{props.title}</p>
      </div>
    </div>
    // </div>
  );
}

Card.propTypes = {
  author: PropTypes.string,
};
export default Card;
