export async function signup(email, password) {
  const message = await fetch("http://localhost:8000/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return console.log(message);
}
