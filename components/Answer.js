import React from "react";
import Draggable from 'react-draggable';
import { FormGroup, FormControl, TextField, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export default function Answer(props) {
    return (
        <Draggable>
            <div className="flex space-y-1 flex-col items-center">
            <div className="flex items-center space-x-3">
                <h1 className="text-gray-600 cursor-grab text-lg font-bold">A</h1>
                <FormGroup>
                <FormControl>
                    <TextField label="Answer" variant="outlined" />
                </FormControl>
                </FormGroup>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            </div>
        </Draggable>
    );
}