import { useState } from "react";
import "./App.css";
import CodeReviewer from "./components/CodeReviewer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CodeReviewer />
      <div className="flex items-center justify-center h-screen bg-blue-500">
        <h1 className="text-white text-4xl font-bold">Hello, Tailwind CSS!</h1>
      </div>
    </>
  );
}

export default App;
