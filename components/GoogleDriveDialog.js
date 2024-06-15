import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function GoogleDriveDialog(props) {
    const [googleDriveData, setGoogleDriveData] = useState(null);

    const handleClose = () => {
        props.onClose();
    }

    return (
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>Save this conversation to Google Drive</DialogTitle>
            <DialogContent>
                <DialogContentText>Sign in with Google to enable autosaving to Google Drive.</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button autoFocus>Continue</Button>
            </DialogActions>
        </Dialog>
    )
}