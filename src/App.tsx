import { useState } from "react";
import NavBar from "@/scenes/NavBar";
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
      <div className='app bg-cream-20'>
        <NavBar
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage}
        />
      </div>
  )
}

export default App;
