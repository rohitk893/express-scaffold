import express from 'express'

const router = express.Router();

router.get('/status', (_,res) => {
    res.json({
        "Status":"Active"
    })
})

export default router;