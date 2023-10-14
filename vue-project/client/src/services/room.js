import axios from "axios";

const addRoom = async (roomname, roomtype) => {
    try {
        // TODO: Assert Validator
        const response = await axios.post('/rooms', { roomname, roomtype })
        return response.data
    } catch (error) {
      return handleError(error)
    }
}

const deleteRoom = async (id) => {
    try {
        // TODO: Assert Validator
        const response = await axios.delete(`/rooms/${id}`)
        return response.data
    } catch (error) {
      return handleError(error)
    }
}

const getRooms = async (query) => {
    try {
        const response = await axios.get('/rooms', { params: query })
        // console.log(response.data)
        return response.data
    } catch (error) {
      return handleError(error)
    }
}

const getRoom = async (id) => {
    try {
        const response = await axios.get(`/rooms/${id}`)
        return response.data
    } catch (error) {
      return handleError(error)
    }
}

function isRoomAvailable(room) {
    // ON HOLD: Implement
  let available = 'Available'
  if (room.reservation === undefined || room.reservation.length === 0) {
    return 'Available'
  }

  for (let i = 0; i < room.reservation.length; i++) {
    const currentTime =
      new Date().getMinutes() +
      new Date().getHours() * 60 +
      new Date().getDate() * 24 * 60 +
      (new Date().getMonth() + 1) * 30 * 24 * 60 +
      new Date().getFullYear() * 365 * 24 * 60
    const roomTime = room.reservation[i].time.split(':')
    const roomDate = room.reservation[i].date.split('-')
    const addedTime =
      roomTime[0] * 60 +
      parseInt(roomTime[1]) +
      roomDate[0] * 365 * 24 * 60 +
      roomDate[1] * 30 * 24 * 60 +
      roomDate[2] * 24 * 60

    if (addedTime - currentTime < 0 && 0 < addedTime + 60 - currentTime) {
      if (0 < addedTime + 60 - currentTime)
        available = 'Available in ' + (addedTime + 60 - currentTime) + ' minutes'
      else available = 'Unavailable'
    }
  }

  return available
}

function handleError(error) {
  if (error.response) {
    console.log(error.response.data)
    return error.response.data
  }

  if (error.request) {
    console.error(error)
    return { error: { message: 'Failed to connect to server.' } }
  }

  console.error(error)
  return { error: { message: 'Something went wrong.' } }
}

export default function roomData() {
  return {
    isRoomAvailable,
    addRoom,
    getRooms,
    getRoom
  }
}
