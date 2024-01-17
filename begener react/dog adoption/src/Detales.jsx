import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";


const Details = () => {
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPet);

    if (results.isLoading){
      return(
        <div className="loading-pane">
          <h2 className="loader">🌀</h2>
        </div>
      )
    }
    return <h2> {id} </h2>;
  };
  
  export default Details;