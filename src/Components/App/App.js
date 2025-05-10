import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.replace("https://www.sonmoe.dev/");
  }, []);

  // Return an empty div to prevent any content from rendering
  return null;
}

export default App;
