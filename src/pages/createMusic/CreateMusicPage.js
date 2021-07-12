import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CreateMusicForm } from "./CreateMusicForm";

function CreateMusicPage() {
  useProtectedPage()
  
  return <div>
    Create Music
    <CreateMusicForm />
  </div>
}

export default CreateMusicPage