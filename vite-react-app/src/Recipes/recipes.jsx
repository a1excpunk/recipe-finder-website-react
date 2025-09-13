import RecepieCard from "./recepieCard";
import data from "../../public/data.json";
import "./recepies.css";
function Recepies() {
  return (
    <div className="recepies-container">
      {data.map((item) => (
        <RecepieCard
          key={item.id}
          imgageUrl={item.image.large}
          slug={item.slug}
          title={item.title}
          overview={item.overview}
          servings={item.servings}
          prepMinutes={item.prepMinutes}
          cookMinutes={item.cookMinutes}
          variant={"simple"}
          viewRecipe={item.sourceUrl}
        />
      ))}
    </div>
  );
}

export default Recepies;
