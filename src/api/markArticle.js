import axiosInstance from "./axiosInstance";

export default function markArticle(articleId, userId, remove) {
    return axiosInstance.post('/university/article/select', { user_id: userId, article_id: articleId, remove })
}