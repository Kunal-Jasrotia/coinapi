import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { FetchData } from './components/fetchData';
import { CoinData } from './components/coinTable';

import { ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
function App() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <div className='container'>
          <FetchData />
        </div>
        <CoinData />
        

      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
