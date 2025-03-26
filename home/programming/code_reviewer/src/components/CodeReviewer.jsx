import { useState } from "react";
import code from "../lib/getReview";
const CodeReviewer = () => {
  const [hasOriginWord, setHasOriginWord] = useState(false);
  const [originWord, setOriginWord] = useState("");
  const getText = (e) => {
    setOriginWord(e.target.value);
  };
  const getClick = (e) => {
    setHasOriginWord(true);
  };
  return (
    <>
      <div className="bg-gray-900 text-white text-center p-4">
        <h1>AI code reviewer</h1>
      </div>

      <div className="flex flex-row">
        {/* レビュー対象 */}
        <div className="relative origin basis-1/2 text-center m-3">
          <h2 className="border-2 border-solid w-7/8 max-x-md m-3 rounded">
            Original
          </h2>
          <textarea
            className="text-white placeholder-white w-full border-1 border-solid resize min-h-80 bg-gray-900"
            placeholder="レビューするスクリプトを入力してください"
            onChange={getText}
          ></textarea>
          <div className="absolute right-0">
            <button
              className="rounded bg-gray-800 text-white p-2"
              onClick={getClick}
            >
              Check
            </button>
          </div>
        </div>

        {/* 翻訳後 */}
        <div className="origin basis-1/2 m-3">
          <h2 className="border-2 border-solid m-3 w-7/8 text-center rounded">
            Result
          </h2>
          <div className="border-1 border-solid w-full min-h-80 ">
            {hasOriginWord ? originWord : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeReviewer;
