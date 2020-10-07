export const loadComicsApi = async (offset) => {
  try {
    const getComicsApi = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e&limit=10&offset=${offset*10}`)
    const response = await getComicsApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}

export const loadComicIdApi = async (id) => {
  try {
    const getComicIdApi = await fetch(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e`)
    const response = await getComicIdApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}

export const loadComicCharactersApi = async (id) => {
  try {
    const getComicCharactersApi = await fetch(`https://gateway.marvel.com/v1/public/comics/${id}/characters?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e`)
    const response = await getComicCharactersApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}

export const loadCharactersApi = async (name) => {
  try {
    const getCharactersApi = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e&nameStartsWith=${name}&limit=10`)
    const response = await getCharactersApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}

export const loadCharactersSearchApi = async (id, offset) => {
  try {
    const getCharactersSearchApi = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=8420b5759538c93703a1aa3af67a2199&hash=db6ec985bba99cf00b9fa4140ed9340e&limit=10&offset=${offset*10}&characters=${id}`)
    const response = await getCharactersSearchApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}


