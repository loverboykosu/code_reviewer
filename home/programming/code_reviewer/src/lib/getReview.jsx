import axios from "axios";
class ReviewerClient {
  static async initialize() {
    let code = new ReviewerClient();
    return code;
  }
  async fetchData(apiUrl) {
    try {
      const result = await axios.get(apiUrl);
      console.log(result);
      return result;
    } catch (error) {
      return error;
    }
  }
}

const code = await ReviewerClient.initialize();
export default code;
