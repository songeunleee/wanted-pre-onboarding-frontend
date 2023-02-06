export async function signup(email, password) {
  return fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.status);
}

export async function signin(email, password) {
  return fetch("http://localhost:8000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
}

export async function createTodo(todo) {
  return fetch("http://localhost:8000/todos", {
    method: "POST",
    headers: {
      Authorization: "Bearer access_token",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
}
