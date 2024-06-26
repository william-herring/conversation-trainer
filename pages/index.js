import { TextField, FormControl, InputLabel, Select, MenuItem, Button, ButtonGroup, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import Head from "next/head";
import { useState } from "react";
import languages from "@/languages/constants";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Trainer from "@/components/Trainer";
import GoogleDriveDialog from "@/components/GoogleDriveDialog";
import Xarrow, { Xwrapper } from 'react-xarrows';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import SettingsDialog from "@/components/SettingsDialog";

export default function Home() {
  const [title, setTitle] = useState('Untitled');
  const [language, setLanguage] = useState('FR');
  const [googleDriveSetUp, setGoogleDriveSetUp] = useState(false);
  const [googleDriveDialogOpen, setGoogleDriveDialogOpen] = useState(false);
  const [settingsDialogOpen, setSettingsDialogOpen] = useState(false);
  const [mode, setMode] = useState('edit');
  const [questionsAnswers, setQuestionsAnswers] = useState({
    "Parlez-moi de votre famille.": ["Ma famille, c'est pas une grande famille.", "Nous sommes quatre personnes. C'est mon père, ma mère, mon frère, et moi bien sur."],
    "Comment es-tu arrivé ici aujourd'hui ?": []
  })

  const setAnswer = (question, answer) => {
    console.log('called');

    let newMap = {...questionsAnswers};
    let answers = newMap[question];
    answers.push(answer);
    newMap[question] = answers;
    setQuestionsAnswers(newMap);
    console.log(questionsAnswers);
  }

  return (
    <main>
      <Head>
        <title>{languages[language].slice(0, 4)} {title}</title>
        <style>
          {"html, body { margin: 0; height: 100%; overflow: hidden }"};
        </style>
      </Head>
      {mode == 'train'? <Trainer questionsAnswers={questionsAnswers} showAnswers questionSpeed={1} conversationSeed={'random'} /> : null}
      <div className="flex p-6">
        <FormControl variant="filled" className="mr-3">
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={(e) => setLanguage(e.target.value)}
          >

            <MenuItem value='EN'>🇬🇧 English</MenuItem>
            <MenuItem value='FR'>🇫🇷 French</MenuItem>
            <MenuItem value='GM'>🇩🇪 German</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Title" defaultValue="Untitled" variant="filled" onChange={(e) => setTitle(e.target.value)} />
        {googleDriveSetUp?
          <div className="flex items-center ml-3 text-xs text-gray-600">
            <CheckIcon fontSize="extra-small" />
            <p className="ml-1">Saved 1m ago</p>
          </div> : 
          <button className="flex items-center ml-3 text-xs text-gray-600" onClick={() => setGoogleDriveDialogOpen(true)}>
            <AddToDriveIcon fontSize="extra-small" />
            <p className="ml-1">Set up autosave with Google Drive</p>
          </button> 
        }
        <ButtonGroup className="ml-auto right-0" variant="contained">
          <Button onClick={() => setSettingsDialogOpen(true)}><SettingsIcon /></Button>
          <Button onClick={() => setMode('train')}>Start</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col space-y-8 w-screen h-screen justify-center items-center">
        {Object.keys(questionsAnswers).map((key, i) => {
          if (questionsAnswers[key].length > 0) {
            return <div key={i} className="space-y-4">
              <Xwrapper>
                <Question key={key} id={key} question={key} addAnswer={() => setAnswer(key, '')} />
                <div className="flex flex-row space-x-8">
                  {questionsAnswers[key].map((a, index) => <Answer key={a + index.toString()} id={a + index.toString()} answer={a} />)}
                </div>
                {questionsAnswers[key].map((end, index) => <Xarrow key={index} zIndex={-5} lineColor="grey" headColor="grey" strokeWidth={2} start={key} end={end + index} />)}
              </Xwrapper>
            </div>
          } else {
            return <Question key={key} id={key} question={key} addAnswer={() => setAnswer(key, 'Votre reponse...')} />  
          }
        })}
      </div>
      <GoogleDriveDialog open={googleDriveDialogOpen} onClose={() => setGoogleDriveDialogOpen(false)} />
      <SettingsDialog open={settingsDialogOpen} onClose={() => setSettingsDialogOpen(false)} />
    </main>
  );
}