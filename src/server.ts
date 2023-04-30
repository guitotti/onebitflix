import express from "express"
import { Sequelize } from "sequelize/dist"
import { sqeuelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sqeuelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started succefully at port ${PORT}`)

})
