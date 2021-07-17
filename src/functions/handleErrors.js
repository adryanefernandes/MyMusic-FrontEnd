export function handleErrors(message) {
  if(message.includes("Fields 'name' and 'password' are required")){
    return "Ops! Os campos precisam ser preenchidos."
  }
  if(message.includes("Incorrect password")){
    return "Senha incorreta."
  }
  if(message.includes("Unregistered email")){
    return "Email não registrado."
  }
}