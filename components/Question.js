import React from "react";
import Draggable from 'react-draggable';
import { FormGroup, FormControl, TextField, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export default function Question(props) {
    return (
        <Draggable>
            <div className="flex space-y-1 flex-col items-center">
            <div className="flex items-center space-x-3">
                <h1 className="text-gray-600 cursor-pointer text-lg font-bold">Q</h1>
                <FormGroup>
                <FormControl>
                    <TextField label="Question" variant="outlined" />
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