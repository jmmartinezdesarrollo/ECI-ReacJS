import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
          <Typography id="modal-modal-title" variant="h6" component="h2" >
          Add item to list
          </Typography>
          
          <TextField
            sx={{ width: "100%" }}
            variant="filled"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Box sx={{ margin: "20px 0" }}>
            <Button
              variant="contained"
              disabled={value.length === 0}
              onClick={saveItem}
            >
              ADD
            </Button>
            <Button variant="contained" onClick={handleClose}>CANCEL</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
