export function signup(eamil, password) {
  return fetch("https://pre-onboarding-selection-task.shop/auth/signup", {
    method: "POST",
    headers: { Content_Type: application / json },
    body: { eamil, password },
  });
}
