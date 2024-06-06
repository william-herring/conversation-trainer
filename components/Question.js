import React from "react";
import Draggable from 'react-draggable';
import { TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export default function Question(props) {
    return (
        <Draggable>
            <div className="flex space-y-1 flex-col items-center">
            <div className="flex items-center space-x-3">
                <h1 className="text-gray-600 cursor-grab text-lg font-bold">Q</h1>
                <TextField style={{width: 320}} label="Question" multiline maxRows={Infinity} defaultValue={props.question == null? "" : props.question} variant="outlined" />
            </div>
            <Button variant="text" startIcon={<AddIcon />}>Answer</Button>
            </div>
        </Draggable>
    );
}