<template>
  <main id="rooms-status-main">
    <div id="rooms-status-div">
      <div v-for="(rooms, type) in typeOfRooms" :key="type" class="rooms-row-container">
        <h2 class="roomTypeTitle">
          {{
            type && type.length > 0
              ? type.split('-')[0].charAt(0).toUpperCase() + type.split('-')[0].slice(1)
              : 'N/A'
          }}
          Rooms:
        </h2>
        <div class="room-box-container">
          <div v-for="room in rooms" :key="room.id">
            <RoomThumbnail :room="room" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import RoomThumbnail from '@/components/RoomThumbnail.vue'
import roomData from '../services/room.js'

export default {
  components: { RoomThumbnail },

  setup() {
    const roomReservations = ref([])

    const fetchData = async () => {
      try {
        roomReservations.value = await roomData().getRooms()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(fetchData)

    const typeOfRooms = computed(() => {
      let roomTypes = {}

      for (let i = 0; i < roomReservations.value.length; i++) {
        let room = roomReservations.value[i]
        let roomType = room['roomtype']

        if (!roomTypes[roomType]) {
          roomTypes[roomType] = []
        }

        roomTypes[roomType].push(room)
      }

      return roomTypes
    })

    return { typeOfRooms }
  }
}
</script>

<style scoped>
@import '../assets/css/views/RoomPageView.css';
</style>
