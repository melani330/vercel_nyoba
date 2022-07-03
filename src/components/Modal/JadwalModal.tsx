import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function JadwalModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const archives= [
    { title: '04 Juli 2022', url: '#' },
    { title: '18 Juli 2022', url: '#' },
    { title: '25 Juli  2022', url: '#' },
    { title: '08 Agustus 2022', url: '#' },
    { title: '15 Agustus 2022', url: '#' },
    { title: '22 Agustus 2022', url: '#' },
    { title: '25 Augustus 2022', url: '#' },
  ];
  return (
    <div>
      {archives.map((archive) => (
        <Link display="block" onClick={handleOpen}variant="body1" key={archive.title}>
          {archive.title}
        </Link>
        
      ))}
      {/* <Button onClick={handleOpen}></Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Jadwal Coaching
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Jadwal beserta link meeting coaching akan diberikan langsung melalui email peserta
          </Typography>
          <Button sx={{ mt: 2 }} autoFocus onClick={handleClose}>
            Oke
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
