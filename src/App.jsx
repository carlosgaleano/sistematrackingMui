import { Container } from "@mui/material";
import Navbar from "./components/navbar/NavbarDrawerResponsive";


 const App =()=>{

  return(

    <Container sx={{mt:5}}>
      <Navbar />
    </Container>
   
  );
}

export default App