import express from 'express'
import productsRoutes from './routes/poducts.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use ('/api', productsRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'end point no found'
    })
})


export default app;