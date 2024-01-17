import { useState,useEffect } from "react";

const localCache = {};

export default function useBreedList(animal){

    const [breedList,setBritList]= useState([]);
const [status,setStatus]= useState("unloaded");

useEffect(()=>{
if (!animal){
    setBritList([]);
} else if (localCache[animal]) {
    setBritList(localCache[animal]);
} else {
    requestBreedList();
}

async function requestBreedList(){
    setBritList([]);
    setStatus("loading");

    const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    )
    const json = await res.json();
    localCache[animal]=json.breeds || []
    setBritList(localCache[animal]);
    setStatus("loaded");
}


},[animal]);
return[breedList,status];
}