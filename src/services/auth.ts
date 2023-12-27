import axiosInstance from "./api";
import { LOGIN_URL } from "./apiUrls";

export const login = async (formata: any) => {
  const response = await axiosInstance.post(LOGIN_URL, formata, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.data;
};
