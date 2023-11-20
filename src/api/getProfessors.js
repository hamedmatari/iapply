import axiosInstance from "./axiosInstance"

export default function getProfessors({ page = 1, pageSize = 50 } = {}) {
    return axiosInstance.get('/university/professors/articles/', { params: { page, page_size: 1 } }).then(res => res.data.data)

}
