import express from 'express';
import { fetchData } from '../src/config/supabase.ts'
const app = express()
const port = 3000



app.get('/', async (req, res) => {
  const data = await fetchData()
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


