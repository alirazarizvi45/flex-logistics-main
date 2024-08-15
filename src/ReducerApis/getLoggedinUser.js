import axiosInstance from "../constants/axiosInstance";

export const getLoggedInUser = async () => {
  const {
    data: { success, user, role },
  } = await axiosInstance.get("get-user");
  return { user, role };
};
