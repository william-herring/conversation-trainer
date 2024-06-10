import React from "react";
import Draggable from 'react-draggable';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { VolumeUp } from "@mui/icons-material";

export default function Answer(props) {
    return (
        <Draggable>
            <div className="flex space-y-1 flex-col items-center">
            <div className="flex items-center space-x-3">
                <h1 className="text-gray-600 cursor-grab text-lg font-bold">A</h1>
                 <TextField InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <VolumeUp />
                        </IconButton>
                    </InputAdornment>
                    ),
                }} style={{width: 450}} label="Answer" multiline maxRows={Infinity} defaultValue={props.answer == null? "" : props.answer} variant="outlined" />
            </div>
                <Button variant="text" startIcon={<AddIcon />}>Follow-up</Button>
            </div>
        </Draggable>
    );
}