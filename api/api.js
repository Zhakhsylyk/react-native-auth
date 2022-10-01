import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

let endpoints = [
  `${BASE_URL}/users`,
  `${BASE_URL}/posts`,
  `${BASE_URL}/photos`,
];

export const getContent = () => {
  axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
    axios.spread((...response) => {
      return response;
    })
  );
};
