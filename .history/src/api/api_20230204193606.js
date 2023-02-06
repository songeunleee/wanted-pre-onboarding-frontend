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
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
}

export async function getTodo() {
  return fetch("http://localhost:8000/todos", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }).then((res) => res.json());
}

export async function deleteTodo(id) {
  return fetch(`http://localhost:8000/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  }).then((res) => res.status);
}

export async function updateTodo(id, todo, isCompleted) {
  return fetch(`http://localhost:8000/todos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo,
      isCompleted,
    }),
  }).then(console.log);
}
