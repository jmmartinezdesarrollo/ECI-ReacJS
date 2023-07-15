import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import CachedIcon from "@mui/icons-material/Cached";
import ECIModal from "./ECIModal";
import Checkbox from "@mui/material/Checkbox";

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
        "& > :not(style)": {
          m: 1,
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
        },
      }}
    >
      <Paper elevation={4}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              padding: 2,
            },
          }}
        >
          <Typography variant="h6" component="h1">
            h1. Heading
          </Typography>
          <Typography variant="subtitle1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            turpis nisl, euismod quis sollicitudin sit amet, imperdiet eu lorem.
            Nam eu ultrices diam. Nunc consequat ex est, et varius justo
            placerat vel. Nullam ac pulvinar est. Quisque vitae felis in mi
            laoreet gravida. Nullam nec augue ultricies lorem vehicula faucibus
            a a ante.
          </Typography>

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
                sx={{ backgroundColor: item.selected ? "aliceblue" : null }}
              />
            );
          })}
        </Box>
        <Stack direction="row" spacing={2}>
          <Button disabled={cacheItems.length === 0 } onClick={cachedItemsButton} variant="outlined" startIcon={<CachedIcon />}>
           {cacheItems.length > 0 ? cacheItems.length  : null }
          </Button>
          <Button
            onClick={deleteItems}
            variant="outlined"
            disabled={anyItemSelected || props.items.length == 0 }
          >
            Delete 
          </Button>
          <ECIModal value={modalValue}></ECIModal>
        </Stack>
      </Paper>
    </Box>
  );
}
