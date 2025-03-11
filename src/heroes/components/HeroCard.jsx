import { Link } from "react-router-dom";
//Local Componet it's a functional component created just to use here
//es un jsx, lo que significa que es independiente de del hero card ya que recibe sus propias props
const CharacterByHero = ({ alter_ego, characters }) =>
  alter_ego === characters ? <></> : <p>{characters}</p>;

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  //es dependiente de herocard, no puede usarse fuera del scope por que no le llegan las props del mismo
  const heroImageUrl = `/heroes/${id}.jpg`;
  console.log(heroImageUrl);
  //const characatersByHero = <p>{characters}</p>;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card"></div>

      <div className="row no-gutters">
        <div className="col-4 ">
          <img src={heroImageUrl} alt={superhero} className="card-img" />
        </div>

        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>

            {/* {
                            (alter_ego !== characters) && characatersByHero
                        } */}
            <CharacterByHero alter_ego={alter_ego} characters={characters} />

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <Link to={`/hero/${id}`}>More Info...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
