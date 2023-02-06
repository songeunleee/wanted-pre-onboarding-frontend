export async function signup(email, password) {
  const message = await fetch("http://localhost:8000/auth/signup/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { email, password },
  });
  return console.log(message);
}
