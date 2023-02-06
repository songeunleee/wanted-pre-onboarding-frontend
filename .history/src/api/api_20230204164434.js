export async function signup(email, password) {
  const message = await fetch(
    "https://pre-onboarding-selection-task.shop/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { email, password },
    }
  );
  return console.log(message);
}
