export function getBlogPosts() {
  return fetch('http://localhost:8080/blog')
  .then((response) => (response.json()))
  .then((json) => (json));
}