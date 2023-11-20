import {
    Box, Paper, Stack, Typography, useTheme
    , Accordion
    , AccordionDetails
    , AccordionSummary
} from '@mui/material'
import React from 'react'
import Article from './Article'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGlobalStore } from '../store/intex';



function ProfCard({ articles = [], name = '', uni = '' }) {
    const theme = useTheme()
    const [expanded, setExpanded] = React.useState(false);
    const globalArticles = useGlobalStore((state) => state.articles)
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ bgcolor: theme.palette.warning.light }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography>{name}</Typography>
                <Typography variant='subtitle2' sx={{ mx: 4 }}>{uni}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Paper sx={{ bgcolor: theme.palette.primary.light, p: 2, display: 'flex', justifyContent: 'space-around' }}>
                    <Stack spacing={2}>
                        {articles.map((article, index) => (
                            <Article key={index} article={article} />
                        ))}
                    </Stack>
                </Paper>
            </AccordionDetails>
        </Accordion>
    )
}

export default ProfCard