import {
    Box, Paper, Typography,
    Accordion
    , AccordionDetails
    , AccordionSummary,
    useTheme
} from '@mui/material';
import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import markArticle from "../api/markArticle";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// selectedBy = { article.selected_by } name = { article?.title } dec = { article?.abstract }
function Article({ article }) {
    const theme = useTheme()
    const name = article.title
    const [selectedBy, setSelectedBy] = useState(article.selected_by)
    const articleId = article.id
    const dec = article.abstract
    const people = [
        { id: 2, name: 'amir', selected: selectedBy.includes(2) },
        { id: 3, name: 'hamed', selected: selectedBy.includes(3) },
        { id: 4, name: 'farzam', selected: selectedBy.includes(4) },
    ]

    const [expanded, setExpanded] = React.useState(false);


    const onSelect = (userId, remove) => {
        markArticle(articleId, userId, remove);
        if (remove) {
            setSelectedBy(prev => {
                const test = prev.filter(each => each != userId)
                return test
            })
        }
        else {
            console.log('here')
            setSelectedBy(prev => [...prev, userId])
        }
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onClickForm = (e) => {
        e.stopPropagation()
    }

    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Box sx={{ width: '100%', p: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Typography > {name}</Typography>
                    <FormControl component="fieldset" sx={{ width: '270px' }} onClick={onClickForm}>
                        <FormGroup aria-label="position" row>
                            {people.map((person, index) => (
                                <FormControlLabel
                                    key={index}
                                    value="top"
                                    control={<Checkbox checked={person.selected} onChange={() => onSelect(person.id, person.selected)} name='dddd' />}
                                    label={person.name}
                                    labelPlacement="top"
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                </Box>            </AccordionSummary>
            <AccordionDetails>
                {dec}
            </AccordionDetails>
        </Accordion>

    );
}

export default Article;
