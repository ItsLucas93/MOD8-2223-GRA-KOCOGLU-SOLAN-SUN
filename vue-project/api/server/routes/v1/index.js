import express from 'express'
import health from './health.js'
import room from './room.js'
import equipment from './equipment.js'
import user from './user.js'

// Create global /api/v1 router
const router = express.Router()

router.use(health)
router.use(room)
router.use(equipment)
router.use(user)

// TODO: Implement new routes here, or extract them to separate files like health.js and auth.js,
// each with its own exported router, import them here, and call router.use(...) to attach them to the global router

// Export global router, to be imported by /server/index.js and mounted to the Express app relative to path /api/v1
export default router
