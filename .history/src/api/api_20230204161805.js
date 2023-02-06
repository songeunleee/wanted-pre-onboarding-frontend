export function signup(eamil, password) {
  return fetch("https://pre-onboarding-selection-task.shop/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: { eamil, password },
  });
}
