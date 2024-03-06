// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  //breeds is the cach name
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}

//     const [breedList,setBritList]= useState([]);
// const [status,setStatus]= useState("unloaded");

// useEffect(()=>{
// if (!animal){
//     setBritList([]);
// } else if (localCache[animal]) {
//     setBritList(localCache[animal]);
// } else {
//     requestBreedList();
// }

// async function requestBreedList(){
//     setBritList([]);
//     setStatus("loading");

//     const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//     )
//     const json = await res.json();
//     localCache[animal]=json.breeds || []
//     setBritList(localCache[animal]);
//     setStatus("loaded");
// }

// },[animal]);
// return[breedList,status];

// if results is not available give me data if not available geve me breeds if not give me an empty array
