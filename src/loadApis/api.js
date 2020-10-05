export const loadComicsApi = async (offset) => {
  try {
    const getComicsApi = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e&limit=10&offset=${offset}`)
    const response = await getComicsApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}