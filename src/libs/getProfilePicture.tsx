import axios from "axios";

export default async function getProfilePicture(token: string) {
  const response = await axios({
    method: "GET",
    url: `${process.env.BACKEND_URL}/api/v1/upload/profile`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!(response.status >= 200 && response.status < 300)) {
    console.log(response.status);
    throw new Error("Failed to fetch user profile picture");
  }
  return response.data;
}
