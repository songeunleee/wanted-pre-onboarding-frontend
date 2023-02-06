export function signup(email, password) {
  return fetch("https://pre-onboarding-selection-task.shop/auth/signin", {
    method: "POST",
    headers: {
      Authorization: "Bearer access_token",
      "Content-Type": "application/json",
    },
    body: { email: JSON.stringify(email), password: JSON.stringify(password) },
  }).then(console.log);
}
