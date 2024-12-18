import express from "express"

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json({ msg: 'hello' })
})

app.post('/create_space', (req, res) => {
  const { space_name } = req.body
  // generate a unique id for space 
  // put this data in the database

  res.json({ msg: 'space created' })
})
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
}
)
