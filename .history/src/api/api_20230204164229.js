export async function signup(eamil, password) {
  const message = await fetch(
    "https://pre-onboarding-selection-task.shop/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        eamil: JSON.stringify(eamil),
        password: JSON.stringify(password),
      },
    }
  );
  return console.log(message);
}
