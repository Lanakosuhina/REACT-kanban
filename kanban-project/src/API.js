export let token;

const API_URL = "https://wedev-api.sky.pro/api/kanban";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";

export async function getKanban() {
  const userData = JSON.parse(localStorage.getItem("user"));
  token = userData.token;

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Нет авторизации");
  } else {
  const data = await response.json();
  return data; 
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

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Не удалось загрузить задачи, попробуйте снова");
  }
}

export async function loginKanban({ login, password }) {
  const response = await fetch(API_URL_USER + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  } else {
    const data = await response.json();
    return data;
  }
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
   
    if (response.status === 400) {
      throw new Error("Попробуйте снова");
    } else {
      const data = await response.json();
      return data;
    }
}
