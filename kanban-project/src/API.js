export let token;


const API_URL = "https://wedev-api.sky.pro/api/kanban"
const API_URL_USER = "https://wedev-api.sky.pro/api/user"

export async function getKanban() {
  const userData = JSON.parse(localStorage.getItem("user")) 
  token = userData.token
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
}

export async function postKanban(text) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      text,
    }),
  });
  const data = await response.json();
  return data;
}

export async function loginKanban({ login, password }) {
  const response = await fetch(API_URL_USER + '/login', {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  const data = await response.json();
  return data;
}

export async function registerKanban({ login, name, password }) {
  const response = await fetch(API_URL_USER, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  const data = await response.json();
  return data;
 
}
