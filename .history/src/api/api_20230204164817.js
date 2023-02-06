export function signup(email, password) {
  return fetch("https://pre-onboarding-selection-task.shop/auth/signup", {
    method: "POST",
    headers: {
      Authorization: "Bearer access_token",
      "Content-Type": "application/json",
    },
    body: { email: "sdf@fds", password: "qwertyuio" },
  }).then(console.log);
}
