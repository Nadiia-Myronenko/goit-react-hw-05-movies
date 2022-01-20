const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "fa94d7cb79165ae52884c540357edc6e";

export function fetchPopular(page) {
  return fetch(
    `${BASE_URL}//3/trending/all/day?api_key=${API_KEY}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json();
  });
}
