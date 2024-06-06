import { TextField, FormControl, InputLabel, Select, MenuItem, Button, ButtonGroup, IconButton } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import Head from "next/head";
import { useState } from "react";
import languages from "@/languages/constants";
import Question from "@/components/Question";

export default function Home() {
  const [title, setTitle] = useState('Untitled');
  const [language, setLanguage] = useState('FR');
  const [answersQuestions, setAnswersQuestions] = useState({
    "Parez-moi de votre famille.": ["Ma famille, c'est pas une grande famille."],
    "Comment es-tu arrivé ici aujourd'hui ?": []
  })

  return (
    <main>
      <Head>
        <title>{languages[language].slice(0, 4)} {title}</title>
        <style>
          {"html, body { margin: 0; height: 100%; overflow: hidden }"};
        </style>
      </Head>
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
        <ButtonGroup className="ml-auto right-0" variant="contained">
          <Button><SettingsIcon /></Button>
          <Button>Start</Button>
        </ButtonGroup>
      </div>
      <div className="flex flex-col space-y-8 w-screen h-screen justify-center items-center">
        {Object.keys(answersQuestions).map(key => <Question question={key}/>)}
      </div>
    </main>
  );
}
