import { Button, FormControl, FormLabel, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";

const UploadMeterReadings = () => {
    const [file, setFile] = useState();
    const [readingResult, setReadingResult] = useState();

    const fileSelectedHandler = event => {
        setFile(event.target.files[0]);
    }

    const  submitHandler = async event => {
        event.preventDefault();
        const url = 'https://localhost:7234/MeterReading/meter-reading-uploads';
        const formData = new FormData();
        console.log(file);
        formData.append('file', file);
        //formData.append('fileName', file.name);
        await fetch(url, {
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((data) => { 
            setReadingResult(data);
        });

    }
    return (
        <div>
            <form onSubmit={submitHandler} encType="multipart/form-data">
                <Typography sx={{ color: "white", fontSize:18}}>Upload Meter Readings</Typography>

                <FormControl sx={{backgroundColor: "white"}}>
                    <FormLabel>File to Upload</FormLabel>
                    <TextField id="fileInput" inputProps={{ accept: ".csv"}} type="file" variant="filled" onChange={fileSelectedHandler} />
                </FormControl>

                <Button type="submit" variant="contained">Upload</Button>
            </form>

            {readingResult && <div>
                <InputLabel sx={{ color: "green"}}>Successful Readings: {readingResult.SuccessfullReadings}</InputLabel>
                <InputLabel sx={{ color: "red"}}>Failed Readings: {readingResult.FailedReadings}</InputLabel>
            </div>}
        </div>
    );

}

export default UploadMeterReadings;