import express from 'express'
import equipment from '../../persistence/equipment-repository.js'



const router = express.Router()

router.get('/equipments', async (req, res) => {res.status(200).json(await equipment.findEquipments()) })
router.get('/equipments/:equipId', async (req, res) => {res.status(200).json(await equipment.findEquipment(req.params.equipId)) })
router.post('/equipments', async(req,res)=>{res.status(201).json(await equipment.addEquipment(req.body)) })
router.delete('/equipments/:equipId', async (req, res) => { res.status(200).json(await equipment.deleteEquipment(req.params.equipId)) })

router.patch('/equipments/:equipId/reservation', async (req, res) => { res.status(202).json(await equipment.setreservation(req.params.equipId, req.body.time, req.body.userId)) })

router.get('/equipments/:equipId/reservation', async (req, res) => { res.status(200).json(await equipment.getreservation(req.body)) })

router.get('/equipments/user/reservation/:userId', async (req, res) => { res.status(200).json(await equipment.findUserEquipmentsReservations(req.params.userId)) })
router.patch('/equipments/user/reservation/:userId', async (req, res) => {
    const del = await equipment.deleteUserEquipmentsReservations(req.params.userId);
    if (del) {
        res.status(202).json({message: 'All equipment reservations have been successfully deleted'})
    }
    else {
        // Not an error, user have no reservations
        res.status(202).json({message: 'Equipment reservations associated with this id  do not exist or could not be deleted.'});
    }
})

export default router