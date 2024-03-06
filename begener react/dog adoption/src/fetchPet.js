const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];
  console.log(id);
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  //if its a 500 throw an error
  if (!apiRes.ok) {
    // always geve a helpful error
    throw new Error(`details/${id} fetch not ok`);
  }
  //react query expect you to return a promis
  // so the responce
  return await apiRes.json();
};

export default fetchPet;
