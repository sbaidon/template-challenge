import 'whatwg-fetch';

export function getBlogPosts() {
  return fetch('http://sbaidon.github.io/blog')
  .then((response) => (response.json()))
  .then((json) => (json));
}