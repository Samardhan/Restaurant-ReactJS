export const get = (url, header) => {
  return fetch("http://localhost:8080/" + url)
    .then((res) => res.json())
    .catch({ fquantity: 0 });
};
