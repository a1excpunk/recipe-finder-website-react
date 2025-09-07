import RecepieCard from "./recepieCard";
import data from "../../public/data.json";
function Recepies() {
  return (
    <div className="recepies-container">
      {data.map((item) => (
        <RecepieCard
          key={item.id}
          imgageUrl={item.image.large}
          slug={item.slug}
          title={item.title}
          description={item.overview}
          servings={item.servings}
          prepMinutes={item.prepMinutes}
          cookMinutes={item.cookMinutes}
          ingredients={item.ingredients}
          instructions={item.instructions}
        />
      ))}
    </div>
  );
}

export default Recepies;
