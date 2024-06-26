export let token;

const API_URL = "https://wedev-api.sky.pro/api/kanban";
const API_URL_USER = "https://wedev-api.sky.pro/api/user";

export async function getKanban({ user }) {
  // берем юзера из контекста, но как он понимает, что мы обращаемся к юзеру именно из контекст
  // или, получается, там где вызывается getKanban мы обращаемся к useUser и именно там он и понимает это
  token = user.token;

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function addTask({ title, topic, status, description, date }) {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
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
    throw new Error("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
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
    throw new Error("Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.");
  } else {
    const data = await response.json();
    return data;
  }
}

export async function deleteTask(id) {
  const response = await fetch(API_URL + "/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Не удалось удалить задачу, попробуйте снова");
  }
}

export async function changeTask({
  title,
  topic,
  status,
  description,
  date,
  id,
}) {
  const response = await fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Не удалось редактировать задачу, попробуйте снова");
  }
}
