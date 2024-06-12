import React from "react";
import Draggable from 'react-draggable';
import { TextField, Button, InputAdornment, IconButton } from '@mui/material'
import { useXarrow } from 'react-xarrows';
import AddIcon from '@mui/icons-material/Add'
import { VolumeUp } from "@mui/icons-material";

export default function Answer(props) {
    const updateArrow = useXarrow();
    return (
        <Draggable onDrag={updateArrow} onStop={updateArrow}>
            <div className="flex space-y-1 flex-col items-center">
                <div id={props.id} className="flex items-center space-x-3">
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