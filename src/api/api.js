const API_URL = "http://127.0.0.1:3333";

const getDogs = () =>
  new Promise(resolve => {
    fetch(`${API_URL}/dogs`, { method: "GET" }).then(response =>
      resolve(response.json())
    );
  });

const addDog = (name, description, photo) =>
  new Promise(resolve => {
    fetch(`${API_URL}/dogs`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ name, description, photo })
    }).then(response => resolve(response.json()));
  });

export default {
  getDogs,
  addDog
};
