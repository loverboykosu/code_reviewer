import axios from "axios";
class ReviewerClient {
  static async initialize() {
    const apiUrl = "https://api.anthropic.com/v1/messages";
    const response = await axios.post(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_CLIENT_SECRET,
        "anthropic-version": "2023-06-01",
      },
    });
    console.log(response);
    let code = new ReviewerClient();
    return code;
  }
  // async fetchData(apiUrl) {
  //   try {
  //     const result = await axios.get(apiUrl);
  //     console.log(result);
  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // }
}

const code = await ReviewerClient.initialize();
export default code;
