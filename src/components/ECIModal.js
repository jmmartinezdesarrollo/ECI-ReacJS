import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "0px 10px 24px #0000001F",
  borderRadius: "20px",
  p: "50px",
};

export default function ECIModal(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const resetValue = () => setValue("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hasValue = () => value.length > 1;

  const saveItem = () => {
    if (hasValue) {
      props.value(value);
      handleClose();
      resetValue();
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        ADD
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="p" component="p" >
          Add item to list
          </Typography>
          
          <Box>
          <TextField
            sx={{ width: "100%" }}
            placeholder="Type the text here..."
            variant="outlined"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          </Box>
     
          <Stack direction="row" sx={{justifyContent: "flex-end", p : 0 ,  gap: "10px"}}>
       
     
          
            <Button
              variant="contained"
              disabled={value.length === 0}
              onClick={saveItem}
            >
              ADD
            </Button>
            <Button variant="contained" onClick={handleClose}>CANCEL</Button>
         
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
