import { useState } from "react";
const CodeReviewer = () => {
  const [hasOriginWord, setHasOriginWord] = useState(false);
  const [originWord, setOriginWord] = useState("");
  const getText = (e) => {
    setOriginWord(e.target.value);
    setHasOriginWord(true);
  };
  return (
    <>
      <div className="bg-gray-900 text-white text-center p-4">
        <h1>AI code reviewer</h1>
      </div>

      <div className="flex flex-row">
        {/* オリジナル言語 */}
        <div className="relative origin basis-1/2 text-center m-3">
          <h2 className="border-2 border-solid m-3 rounded">Original</h2>
          <textarea
            className="text-white placeholder-white border-1 border-solid w-md min-h-80 bg-gray-900"
            name=""
            id=""
            placeholder="レビューするスクリプトを入力してください"
            onChange={getText}
          ></textarea>
          <div className="absolute right-0">
            <button className="rounded bg-gray-800 text-white p-2">
              Check
            </button>
          </div>
        </div>

        {/* 翻訳後 */}
        <div className="origin basis-1/2 m-3">
          <h2 className="border-2 border-solid m-3 text-center rounded">
            Result
          </h2>
          <div className="border-1 border-solid w-md min-h-80 ">
            {hasOriginWord && originWord}
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeReviewer;
