const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];
  console.log(animal);
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  //if its a 500 throw an error
  if (!apiRes.ok) {
    // always geve a helpful error
    throw new Error(`breeds/${animal} fetch not ok`);
  }
  //react query expect you to return a promis
  // so the responce
  return await apiRes.json();
};

export default fetchBreedList;
