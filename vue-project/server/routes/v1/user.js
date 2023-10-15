import express from 'express'
import user from '../../persistence/users-repository.js'

const router = express.Router()

router.get('/users', async (req, res   ) => {res.status(200).json(await user.findUsers()) })
router.get('/users/:id', async (req, res) => {res.status(200).json(await user.findUser(req.params.id)) })
router.post('/users', async(req,res)=>{res.status(201).json(await user.addUser(req.body)) })
router.delete('/users/:id', async (req, res) => { res.status(200).json(await user.deleteUser(req.params.id)) })
router.patch('/users/:id', async (req, res) => {res.status(202).json(await user.modifyUser(req.params.id, req.body)) })
router.get('/users/key/:key', async (req, res) => {res.status(200).json(await user.findUserByKey(req.params.key)) })

router.get('/users/verify', async (req, res) => {res.status(200).json(await user.verifyUser(req.body)) })
router.post('/users/login', async (req, res) => {
    res.status(200).json(await user.login(req.body, req))
})
router.post('/users/:id/logout', async (req, res) => {
    res.status(200).json(await user.logout(req.params.id, req))
})
router.get('/users/:id/connected', async (req, res) => {res.status(200).json(await user.getConnectedUser(req.params.id)) })

export default router