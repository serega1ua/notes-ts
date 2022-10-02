import React from 'react';
import { Box } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type WorkspaceProps = {
  obj: any;
  onDelete: () => void;
};

const Workspace: React.FC<WorkspaceProps> = ({ obj, onDelete }) => {
  const [open, setOpen] = React.useState(false);
  // modal funcs
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // button funcs
  const handleCancel = () => setOpen(false);
  const handleDelete = () => {
    axios.delete(`https://631493a9fa82b738f74a2534.mockapi.io/notes/${obj.id}`);
    setOpen(false);
    onDelete();
  };

  return (
    <Box
      sx={{
        padding: '1rem',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>
        <Button onClick={handleOpen} variant="outlined" color="error">
          DELETE
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              You really wanna it?
            </Typography>
            <ButtonGroup
              disableElevation
              variant="outlined"
              aria-label="Disabled elevation buttons"
            >
              <Button onClick={handleCancel}>Cancel</Button>
              <Button color="error" onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </Modal>
      </div>
      <br></br>
      <h1>{obj.title}</h1>
      <br></br>
      <span>{obj.date}</span>
      <br></br>
      <p>{obj.text}</p>
    </Box>
  );
};

export default Workspace;
