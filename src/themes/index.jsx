import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { CssBaseline, GlobalStyles, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from './palette';

// import globalStyles from './globalStyle';

export default function ThemeCustomization({ children }) {
    const navType = 'light';
    const theme = useMemo(() => Palette(navType), [navType]);

    // eslint-disable-next-line react-hooks/exhaustive-deps

    const themeOptions = useMemo(
        () => ({
            // direction: rtlLayout ? 'rtl' : 'ltr',
            palette: theme.palette,
            mixins: {
                toolbar: {
                    minHeight: '48px',
                    padding: '16px',
                    '@media (min-width: 600px)': {
                        minHeight: '48px'
                    }
                }
            }
        }),
        [theme]
    );

    const themes = createTheme(themeOptions);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                {/* <GlobalStyles styles={globalStyles} /> */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

ThemeCustomization.propTypes = {
    children: PropTypes.node
};
