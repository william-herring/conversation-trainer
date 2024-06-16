import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent, DialogActions, Button, FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

export default function SettingsDialog(props) {
    const [showQuestions, setShowQuestions] = useState(true);
    const [showAnswers, setShowAnswers] = useState(false);
    const [questionSpeed, setQuestionSpeed] = useState(1);
    const [conversationSeed, setConversationSeed] = useState('random');

    const handleClose = () => {
        props.onClose();
    }

    return (
        <Dialog onClose={handleClose} open={props.open} PaperProps={{
            component: 'form',
            onSubmit: (event) => {}
        }}>
            <DialogTitle>Conversation settings</DialogTitle>
            <DialogContent>
                <FormGroup>
                    <FormControlLabel control={<Switch checked={showQuestions} onChange={() => setShowQuestions(!showQuestions)} />} label="Show questions" />
                    <FormControlLabel control={<Switch checked={showAnswers} onChange={() => setShowAnswers(!showAnswers)} />} label="Show answers" />
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button autoFocus>Save</Button>
            </DialogActions>
        </Dialog>
    )
}