import { useState } from "react";
import { Typography } from "@mui/material";

export default function Trainer({questionsAnswers, showQuestions = true, showAnswers = false, questionSpeed, conversationSeed}) {
    return (
        <div className='flex flex-col space-y-6 z-10 bg-white w-screen h-screen items-center justify-center'>
            {showQuestions? <Typography variant='h3'>{Object.keys(questionsAnswers)[0]}</Typography> : null}
            <Typography className='text-gray-600' variant='button'>Spacebar to answer</Typography>
        </div>
    );
}