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
}) {
  return (
    <div className="recepie-card">
      <img src={imgageUrl} alt={slug} />
      <p>{title}</p>
      <p>{overview}</p>
      <p>Servings: {servings}</p>
      <p>Preparation Time: {prepMinutes} minutes</p>
      <p>Cooking Time: {cookMinutes} minutes</p>
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ul>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}
export default RecepieCard;
