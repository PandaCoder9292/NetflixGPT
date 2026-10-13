export const checkValidData = (email, password, name) => {
  const isValidMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );

  if (name !== null && name !== undefined) {
    const isNameValid = /^[a-zA-Z][a-zA-Z_]{2,}$/.test(name);
    if (!isNameValid) return "Name is not Valid";
  }

  if (!isValidMail) return "Email ID is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
