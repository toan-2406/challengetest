
import axiosClient from "./axiosClient";

const dataRespon = {
  getCoins: async () => axiosClient.get('/coins'),
  getSearch: async (q:any) => axiosClient.get(`https://api.coinranking.com/v2/search-suggestions?query=${q}`),
};

export default dataRespon;
