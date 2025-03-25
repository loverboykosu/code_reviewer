import axios from "axios";
class CodeReviewer {
  static async initialize() {
    console.log("hello");
  }
}

const codeReviewer = await CodeReviewer.initialize();
export default codeReviewer;
