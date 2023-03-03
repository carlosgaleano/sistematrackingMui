import { Container,Typography,Button } from "@mui/material";
import { ButtonComponent } from "./components/example";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";

const Old = ()=>{

    return (
 <Container
    maxWidth="false"
    sx={{
      border: 2,
      boxShadow: 1,
      pb: 2,
    }}
    >
 
    <Typography   variant="h3"
  component="h2"
  mb={2}
  color="primary"
  align="center"
  boxShadow={2}
  pb={2} gutterBottom>
        App
      </Typography>
    <ButtonComponent />

    <Button
        variant="contained"
        color="info"
        startIcon={<AirplanemodeActiveIcon />}
      >
        Botón personalizado
      </Button>

      <Button
        variant="contained"
        color="secondary"
        endIcon={<AndroidIcon />}
      >
        Botón 2
      </Button>
  
    </Container > 

    )
   
}