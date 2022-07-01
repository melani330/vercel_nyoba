import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import { Redirect} from "react-router-dom";

export default function LogoutModal() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleKeluar=()=>{
  setOpen(false);
  window.location.href= '/'
};

  return (
    <div> 
      <Typography className="btn btn-navbar" onClick={handleClickOpen}>
        Sign Out
      </Typography>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        
      >
        <DialogTitle id="responsive-dialog-title">
          {"Keluar Aplikasi"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Apakah Anda yakin untuk keluar dari aplikasi ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Batal
          </Button>
          <Button autoFocus onClick={handleKeluar}>
            Keluar 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
