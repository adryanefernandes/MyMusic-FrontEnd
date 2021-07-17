export function handleErrors(message) {
  //All forms
  if (message.includes("Fields")) {
    return "Ops! Os campos precisam ser preenchidos."
  }

  //login
  if (message.includes("Incorrect password")) {
    return "Senha incorreta."
  }
  if (message.includes("Unregistered email")) {
    return "Email não registrado."
  }

  //signup
  if (message.includes("email format is incorrect")) {
    return "Formato do email incorreto. Tente algo como: 'email@email.com'."
  }
  if (message.includes("Email already exists")) {
    return "Email já cadastrado, tente fazer Login."
  }
  if (message.includes("User already exists")) {
    return "Usuário já cadastrado, tente outro."
  }
  if (message.includes("Email already exists")) {
    return "Email já cadastrado, tente fazer Login."
  }
  if (message.includes("Password must be at least 6 characters")) {
    return "Senha muito pequena, ela deve ter no mínimo 6 caracteres."
  }
}