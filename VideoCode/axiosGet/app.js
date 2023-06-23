async function getJoke(first, last){
  const res = await axios.get(`https://api.chucknorris.io/jokes/random?`,{params: {first, last}});
  console.log(res);
}

getJoke("Jason", "Yoo");