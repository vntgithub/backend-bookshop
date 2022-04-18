const jwt = require('jsonwebtoken')
const RefreshToken = require('../model/refreshToken.model')

module.exports = {
    create: async (req, res) => {
        const refreshToken = req.body.token
        if (refreshToken == null) return res.sendStatus(401)

        if (!RefreshToken.find({ token: refreshToken })) return res.sendStatus(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403)
            const accessToken = generateAccessToken({ name: user.name })
            res.json({ accessToken: accessToken })
        })
    },
    delete: async (req, res) => {
        RefreshToken.delete({ token: req.body.token })
        res.sendStatus(204)
    },
    login: async (req, res) => {
        const username = req.body.username
        const user = { name: username }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3h' })
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
        RefreshToken.create({ token: refreshToken })
        res.json({ accessToken: accessToken, refreshToken: refreshToken })
    }
}




