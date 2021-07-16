export const goToHome = (history) => {
  history.push('/')
}

export const goToSignup = (history) => {
  history.push('/signup')
}

export const goToLogin = (history) => {
  history.push('/login')
}

export const goToCreateMusic = (history) => {
  history.push('/create/music')
}

export const goBack = (history) => {
  history.goBack()
}