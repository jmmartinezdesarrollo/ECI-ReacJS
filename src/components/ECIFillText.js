import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CachedIcon from "@mui/icons-material/Cached";
import ECIModal from "./ECIModal";
import Checkbox from "@mui/material/Checkbox";
import Badge from '@mui/material/Badge';

export default function ECIFillText(props) {
  const [cacheItems, setCacheItems] = React.useState([]);
  const [anyItemSelected, setAnyItemSelected] = React.useState(true)

 
  const modalValue = (value) => {
    props.setItems((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1000),
        value,
      },
    ]);
  };
  const handleChangeItem = (event) => {
  
    let updateValue = [...props.items];
    let findItem = props.items.filter((item) => {
      return item.id === parseInt(event.target.id);
    });
    let isSelected = props.items.some((item) => {
      return item.selected === true && item.id === parseInt(event.target.id);
    });
 
    if (isSelected) {
      findItem[0].selected = false;
    } else {
      findItem[0].selected = true;
    }
    let someSelected = props.items.some((item) => {
      return item.selected === true ;
    });

    setAnyItemSelected(!someSelected)

    props.setItems(updateValue);
 
  };
  const deleteItems = () => {
 
    let deleteItems = [...props.items].filter((item) => {
      return item.selected === false || item.selected === undefined
    });
    setCacheItems((prev)=>[
      ...prev,
      [...props.items]
    ])
    props.setItems(deleteItems);

  };
  const cachedItemsButton = () =>{
   let items = [...cacheItems]
   props.setItems(items[items.length -1]);
   items.pop()
   setCacheItems([...items])
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        maxWidth: "900px",       
        margin: "0 auto",      
        "& > :not(style)": {
          p: { xs: "10px", sm: "50px" },
          borderRadius: "20px",
         
        },              
      }}    
    >
      <Paper elevation={4}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 0,
              width: "100%",
              padding: {xs:"25px 10px;"}
             
            },
          }}
        >
          <Typography align="center"variant="h1" component="h1" sx={{fontSize:{xs: "30px", md: "40px"}}} >
          This is a technical proof
          </Typography>
          <Typography align="center" variant="p" component="p">
          Lorem ipsum dolor sit amet consectetur adipiscing, elit mus primis nec inceptos. Lacinia habitasse arcu molestie maecenas cursus quam nunc, hendrerit posuere augue fames dictumst placerat porttitor, dis mi pharetra vestibulum venenatis phasellus.
          </Typography>
          <Box sx={{ display: "flex",
            flexWrap: "wrap",
            padding: {xs: "10px 10px 20px 10px!important", md:"15px 15px 45px 15px!important"},
            "& > :not(style)": {
              m: 0,
              width: "100%",
              padding: "10px",
             
            },border: "1px solid #CCCCCC",
            backgroundColor:"#F7F7F7"}}>
          {props.items.map((item) => {
            return (
              <FormControlLabel
                key={item.id.toString()}
                control={
                  <Checkbox
                    id={item.id.toString()}
                    onChange={handleChangeItem}
                    sx={{ display: "none" }}
                  />
                }
                label={item.value}
                sx={{ margin:"1px 0", backgroundColor: item.selected ? "#324BFF" : null, color: item.selected ? "#FFFFFF" : "#333333"}}
              />
            );
          })}
          </Box>
          <Stack sx={{justifyContent: "space-between", p: { xs: "20px 0px !important;", 
          md: "16px 16px 16px 0 !important"}, 
          flexDirection : {xs: "column", md: "row"} ,gap:{xs:"25px", md:0}}}>
          <Box sx={{display: "flex", gap: "10px"}}>

         
          
          <Badge badgeContent={cacheItems.length  } color="primary">
          <Button disabled={cacheItems.length === 0 } onClick={cachedItemsButton} variant="onlyIcon" ><CachedIcon />     
          </Button>
          </Badge>
          
          <Button          
            onClick={deleteItems}
            variant="outlined"
            disabled={anyItemSelected || props.items.length === 0 }
            sx={{width : {xs:"100%", md:"140px"}}} 
          >
            Delete 
          </Button>
          </Box>
          
          <ECIModal value={modalValue} setCacheItems={setCacheItems} items={props.items}></ECIModal>
        </Stack>
        </Box>
     
      </Paper> 
    </Box>
  );
}
