import "./recepieCard.css";
function RecepieCard({
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
          <p className="servings">Servings: {servings}</p>
          <p className="preparation-time">
            Preparation Time: {prepMinutes} minutes
          </p>
          <p className="cooking-time">Cooking Time: {cookMinutes} minutes</p>
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
export default RecepieCard;
