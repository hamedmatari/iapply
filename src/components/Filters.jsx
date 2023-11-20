import { Autocomplete, Box, TextField } from '@mui/material';
import React from 'react';

function Filters() {
    return (
        <Box>
            <Autocomplete options={[]} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="professor" />} />
        </Box>
    );
}

export default Filters;
