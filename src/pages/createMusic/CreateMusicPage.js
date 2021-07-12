import { Header } from "../../components/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CreateMusicForm } from "./CreateMusicForm";

function CreateMusicPage() {
  useProtectedPage()
  
  return <div>
    <Header />
    Create Music
    <CreateMusicForm />
  </div>
}

export default CreateMusicPage