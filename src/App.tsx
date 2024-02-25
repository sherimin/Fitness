import { useState } from "react";
import NavBar from "./scenes/NavBar";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');

  return (
      <div className='app bg-berry-20'>
        <NavBar
          selectedPage={selectedPage} 
          setSelectedPage={setSelectedPage}
        />
      </div>
  )
}

export default App;
