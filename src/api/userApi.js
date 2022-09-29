
import axiosClient from "./axiosClient";

const userApi = {
  get: async (address) =>axiosClient.get(`/user/${address}`),
  login: async(address, signature) => axiosClient.post(`/user/login`, {address, signature}),
  update: async(body) => axiosClient.post(`/user/update`, body),
  refreshToken: async() => axiosClient.post(`/user/refreshToken`),
};

export default userApi;
