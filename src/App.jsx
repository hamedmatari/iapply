import { Backdrop, Box, CircularProgress, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import ThemeCustomization from './themes';
import List from '@/components/List';
import { useGlobalStore } from './store/intex';


function App() {
  const loading = useGlobalStore((state) => state.loading)

  const theme = useTheme()

  return (
    <div style={{ backgroundColor: "#FEFAF5" }}>
      <ThemeCustomization>
        {/* <Box sx={{ mx: 2, bgcolor: theme.palette.grey[100] }}> */}
        <Box sx={{ mx: 2 }}>
          <List />
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Box>
      </ThemeCustomization>
    </div>
  )
}

export default App
