import config from "../config/config";

export async function registerHelper(user_info) {
  const data = await (
    await fetch(config.URL.URL_BACK + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_info),
    })
  ).json();

  return data;
}

export async function loginHelper(user_info) {
  const data = await (
    await fetch(config.URL.URL_BACK + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_info),
    })
  ).json();
  if (!data.error) localStorage.setItem("user_data", JSON.stringify(data.user));
  return data;
}
