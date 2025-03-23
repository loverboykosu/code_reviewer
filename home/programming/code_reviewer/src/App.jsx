import { useState } from "react";
import CodeReviewer from "./components/CodeReviewer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CodeReviewer />
    </>
  );
}

export default App;
