import axiosClient from './axiosClient'

const getToken = () => localStorage.getItem('token')

const uploadApi = {
  uploadFile: (file) => {
    var headers = new Headers();
    headers.append("authorization", `Bearer ${getToken()}`)
    var formdata = new FormData();
    formdata.append("file", file);
    return axiosClient.post(`/upload/file`, formdata, headers)
  },

  uploadJson: (json) => {
    var headers = new Headers();
    headers.append("authorization", `Bearer ${getToken()}`)
    headers.append("Content-Type", "application/json");
    return axiosClient.post(`/upload/json`, {data: json})
  }

}

export default uploadApi