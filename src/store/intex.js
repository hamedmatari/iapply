import { create } from 'zustand';

export const useGlobalStore = create((set) => ({
    loading: false,
    setLoadingTrue: () => set((state) => ({ loading: true })),
    setLoadingFalse: () => set((state) => ({ loading: false })),
    articles: [],
    setArticles: (articles) => set((state) => ({ ...state, articles })),
    changeArticleMarks: (articleId, userId, value) => set((state) => {
        const articles = state.articles.map(each => {
            if (each.id === articleId) {
                selectedBy = new Set(each.selected_by)
                value ? selectedBy.add(userId) : selectedBy.delete(userId)
                each.selectedBy = [...selectedBy]
                return each
            }
            return each
        })
        return ({ ...state, articles })
    })

}));
