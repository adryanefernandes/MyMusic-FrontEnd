import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CreateMusicForm } from "./CreateMusicForm";

function CreateMusicPage() {
  useProtectedPage()
  
  return <div>
    <Header />
    Create Music
    <CreateMusicForm />
    <Footer />
  </div>
}

export default CreateMusicPage