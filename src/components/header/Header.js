import { useHistory } from "react-router";
import { goBack } from "../../router/coordinator";

export function Header() {
  const history = useHistory()

  return <header>
    Logo
    <button onClick={() => goBack(history)}>Voltar</button>
  </header>
}