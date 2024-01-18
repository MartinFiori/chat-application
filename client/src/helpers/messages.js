import config from "../config/config";
function handleGetTokenFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)).token;
}

export async function postMessage(message) {
  const res = await fetch(config.URL.URL_BACK + "/messages", {
    method: "POST",
    headers: {
      authorization: "Bearer " + handleGetTokenFromLocalStorage("user_data"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  await res.json();
}

export async function getMessages() {
  const res = await fetch(config.URL.URL_BACK + "/messages", {
    headers: {
      authorization: "Bearer " + handleGetTokenFromLocalStorage("user_data"),
    },
  });

  const data = await res.json();
  if (data.error) return [];
  return data.resultados;
}
