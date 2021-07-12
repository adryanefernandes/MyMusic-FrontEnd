import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'
import { SignupForm } from './SignupForm'

function SignupPage() {
  useUnprotectedPage()

  return <div>
    <section>
      <div>Logo</div>
      <p>Casdastro</p>
      <SignupForm />
    </section>
    <section>
      Foto
    </section>
  </div>
}

export default SignupPage