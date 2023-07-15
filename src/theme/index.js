import { createTheme } from '@mui/material/styles';

export const theme = createTheme({

  typography: {
    fontFamily:'Montserrat,Roboto',
    h1: {
      fontSize: "40px",
      color:"#333333s"
    }, 
    p: {
      fontSize: "18px",
      color:"#333333"
    },
    label: {
      fontSize: "18px",
      color:"#333333"
    },
    button: {
      fontSize: "16px",
      
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {     
          width:"140px",   
          height:"50px", 
          color:"##FFFFFF",
          border: "1px solid #324BFF",
          borderRadius: "50px",
          backgroundColor: '#324BFF',
        },
        outlined: {     
          width:"140px",   
          height:"50px", 
          color:"##FFFFFF",
          border: "1px solid #324BFF",
          borderRadius: "50px",     
          
        },
        contained: {     
          width:"140px",   
          height:"50px", 
          color:"##FFFFFF",
          border: "1px solid #324BFF",
          borderRadius: "50px",
          '&:disabled': { 
            color:"rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(0, 0, 0, 0.12)",        
    
          },
          
        },
        onlyIcon: {     
          width:"80px",   
          height:"50px", 
          color:"#324BFF",
          border: "1px solid #324BFF",
          borderRadius: "50px",
          '&:disabled': { 
            color:"rgba(0, 0, 0, 0.12)",
            border: "1px solid rgba(0, 0, 0, 0.12)",        
    
          },
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        outlined: {     
          width:"140px",   
          height:"50px", 
          color:"##FFFFFF",
          border: "1px solid #324BFF",
          borderRadius: "50px",
          backgroundColor: '#324BFF',
        },
      }
    },
  }
});