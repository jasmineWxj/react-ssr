import express from 'express'

const app = express();
app.use(express.static('public'))

const port = 2007
app.listen(port, () => {
    console.log('app is running port' + port )
})

export default app

