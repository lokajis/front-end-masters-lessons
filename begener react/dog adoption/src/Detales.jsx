import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  //we have to gine a key to use query of what are we requesting
  // the query key is the ["details", id] that is going to be
  //providet to fetchPet

  //we are treading it as a sync hook that its fetching from an
  //async api
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  //here i can asume that the pet exists becosue of the if
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button>Adopt {pet.name} </button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
