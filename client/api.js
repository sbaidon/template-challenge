export function getBlogPosts() {
  return fetch('https://template-challenge-backend.herokuapp.com/blog')
  .then((response) => (response.json()))
  .then((json) => (json));
}