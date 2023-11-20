import { Box, Pagination, Stack, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Article from './Article';
import Filters from './Filters';
import ProfCard from './ProfCard';
import getProfessors from '../api/getProfessors';
import { useGlobalStore } from '../store/intex';


function List() {
    const setLoadingFalse = useGlobalStore((state) => state.setLoadingFalse)
    const setLoadingTrue = useGlobalStore((state) => state.setLoadingTrue)
    const setArticles = useGlobalStore((state) => state.setArticles)
    const articles = useGlobalStore((state) => state.articles)

    // const loading = useGlobalStore((state) => state.loading)
    const theme = useTheme();
    const [pagination, setPagination] = useState({
        page: 1,
        page_count: 100
    })

    const [profList, setProfList] = useState([
        {
            articles: [],
            prof_name: "N. Asokan",
            university: "University Of Waterloo"
        }
    ])

    const onGetProfessors = ({ page = page } = {}) => {
        setLoadingTrue()
        getProfessors({ page }).then((data) => {
            setArticles(data.professor_articles)

            setProfList(data.professor_articles)
            setLoadingFalse()
            setPagination({ page, page_count: data.page_count })
        })

    }
    const handlePageChange = (e, value) => {
        onGetProfessors({ page: value })
    }
    useEffect(() => {
        onGetProfessors({ page: 1 })
    }, [])

    return (
        <Box sx={{ py: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* <Filters /> */}
            <Stack spacing={2}>
                {profList.map((prof, index) => (
                    <ProfCard key={index} uni={prof?.university} name={prof?.prof_name} articles={prof?.articles} />
                ))}
            </Stack>
            <Pagination count={2} page={pagination.page} onChange={handlePageChange} />
        </Box>
    );
}

export default List;
