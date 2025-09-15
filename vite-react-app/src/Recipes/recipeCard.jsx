import "./recipeCard.css";
import servingIcon from "../../public/assets/images/icon-servings.svg";
import prepTimeIcon from "../../public/assets/images/icon-prep-time.svg";
import cookTimeIcon from "../../public/assets/images/icon-cook-time.svg";
function RecipeCard({
  title,
  overview,
  servings,
  prepMinutes,
  cookMinutes,
  ingredients,
  instructions,
  imgageUrl,
  slug,
  variant,
}) {
  return (
    <div className="recepie-card">
      <img src={imgageUrl} alt={slug} />
      <div className="recipe-info">
        <div className="description-container">
          <p className="title">{title}</p>
          <p className="overview">{overview}</p>
        </div>
        <div className="details-container">
          <p className="servings">
            <img
              className="details-icon"
              src={servingIcon}
              alt="servings icon"
            />
            Servings: {servings}
          </p>
          <p className="preparation-time">
            <img
              className="details-icon"
              src={prepTimeIcon}
              alt="preparation icon"
            />
            Prep: {prepMinutes} mins
          </p>
          <p className="cooking-time">
            <img
              className="details-icon"
              src={cookTimeIcon}
              alt="cooking icon"
            />
            Cook: {cookMinutes} mins
          </p>
        </div>
      </div>
      {variant === "detailed" && (
        <>
          <div className="ingredients-section">
            <h2>Ingredients:</h2>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="instructions-section">
            <h2>Instructions:</h2>
            <ul>
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </>
      )}
      {variant === "simple" && (
        <button className="btn-view-recipe">View Recipe</button>
      )}
    </div>
  );
}
export default RecipeCard;
