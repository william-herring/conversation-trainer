import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import languages from "@/languages/constants";

export default function Home() {
  const [title, setTitle] = useState('Untitled')
  const [language, setLanguage] = useState('FR')

  return (
    <main className="p-6">
      <Head>
        <title>{languages[language].slice(0, 4)} {title}</title>
      </Head>
      <div className="flex">
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
        <Button className="ml-auto right-0" variant="contained">Start</Button>
      </div>
    </main>
  );
}
