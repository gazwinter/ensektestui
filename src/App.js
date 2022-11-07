import { Box } from '@mui/material';
import './App.css';
import UploadMeterReadings from './MeterReadings/UploadMeterReadings';

function App() {
  return (
    
      <Box sx={{ width: '100%', height: '100%'}}>
        <div className="App">          
          <UploadMeterReadings />  
        </div>
      </Box>
    
  );
}

export default App;
