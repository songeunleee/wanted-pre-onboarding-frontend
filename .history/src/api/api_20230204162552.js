export async function signup(eamil, password) {
  const message = await fetch(
    "https://pre-onboarding-selection-task.shop/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { eamil: "sdf@sdf", password: "12345678" },
    }
  );
  return console.log(message);
}
