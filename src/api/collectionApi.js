
import axiosClient from "./axiosClient";

const collectionApi = {

  query: async (query) => axiosClient.get(`${query}`),

  hot: async (query) => axiosClient.get(`/collection/hot?period=${query.period}&network=${query.network}&page=${query.page ? query.page : 1}`),
  spotlight: async () => axiosClient.get(`/collection/spotlight`),
  getHotItems: async () => axiosClient.get(`/explore/hots`),
  getAll: async () => axiosClient.get(`/collection/search`),

  getCollections: async (query) => axiosClient.get(`/collection?${query}`),

  existCollection: async (query) => axiosClient.get(`/collection/exist${query}`),

  getCollection: async (query) => axiosClient.get(`/collection/detail?${query}`),
  getCollectionInfo: async (query) => axiosClient.get(`/collection/info?${query}`),
  getCollectionDetail: async (query) => axiosClient.get(`/explore?${query}`),
  getCollectionActivity: async (query) => axiosClient.get(`/user/activities?${query}`),

  getCategorys: async () => axiosClient.get(`/category`),


  // Item

  createItem: async (body) => axiosClient.post(`/item/create`, body),
  updateItem: async (body) => axiosClient.post(`/item/update`, body),
  deleteItem: async (body) => axiosClient.post(`/item/delete`, body),
  createOffer: async (body) => axiosClient.post(`/item/createOffer`, body),

  cancelOffer: async  (body) => axiosClient.post(`/item/cancelOffer`, body),

  createBid: async (body) => axiosClient.post(`/item/createBid`, body),


  createSale: async (url, body) => axiosClient.post(`/pair/${url}`, body),
  lowerPrice: async (body) => axiosClient.post(`/pair/lowerPrice`, body),
  unlist: async  (body) => axiosClient.post(`/pair/unlist`, body),

  unListAuction: async  (body) => axiosClient.post(`/pair/unListAuction`, body),

  getItem: async (collection, tokenId) => axiosClient.get(`/item/detail/${collection}/${tokenId}`),
  likeItem: async(body) => axiosClient.post(`/item/like`, body),

  // User
  
  getMyCollections: async () => axiosClient.get(`/user/collections`),

  uGetOnSale: async (address) => axiosClient.get(`/user/sale?address=${address?.toLowerCase()}`),
  uGetOwned: async (address) => axiosClient.get(`/user/owned?address=${address?.toLowerCase()}`),
  uGetCreated: async (address) => axiosClient.get(`/user/created?address=${address?.toLowerCase()}`),
  uGetLiked: async (address) => axiosClient.get(`/user/liked?address=${address?.toLowerCase()}`),
  uGetActivity: async (address) => axiosClient.get(`/user/activities?address=${address?.toLowerCase()}`),
  uGetFollowing: async (address) => axiosClient.get(`/user/following?address=${address?.toLowerCase()}`),
  uGetFollowers: async (address) => axiosClient.get(`/user/followers?address=${address?.toLowerCase()}`),


  // Search

  searchAll: async (query) => axiosClient.get(`/explore/search?${query}`),


  //Token

  getToken: async (query) => axiosClient.get(`/tokens${query}`),
};

export default collectionApi;
