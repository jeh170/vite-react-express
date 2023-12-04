import { Typography, TextField, Button, Stack, Box } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

const HelloComponent = () => {

  const [hello, setHello] = useState(""); 
  
  const [newHello, setNewHello] = useState("")

  const getHello = () => {
      axios.get("/api/hello").then(res => res.data).then((text) => setHello(text));
    }

  useEffect(() => {
     getHello();
  }, [])

  const sendHello = () => {
    axios.put("/api/hello", { hello: newHello }).then(getHello)
  }

  return (
    <Stack spacing={2}>
      <Typography variant='h3'>This is a test</Typography>
      <Stack padding={2} spacing={2}>
        <Typography variant='h5'>{ hello }</Typography>
        <TextField value={newHello} onChange={(event) => setNewHello(event.target.value)}/>
        <Button variant='contained' onClick={sendHello}>Change Hello</Button>
      </Stack>
    </Stack>
      )
}

export default HelloComponent;