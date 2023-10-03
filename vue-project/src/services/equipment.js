let id = 1
const equipments = []

function addEquipment (equipment) {
  equipment.id = id++
  equipments.push(equipment)
}

function getEquipments () {
  return equipments
}

function getEquipment (id) {
  return equipments.find(equipment => equipment.id === id)
}

function modifyEquipment (equipment) {
  const index = equipments.findIndex(e => e.id === equipment.id)
  equipments.splice(index, 1, equipment)
}

addEquipment({name: "Washing Machine 1", category: "washing", status: "Available"});
addEquipment({name: "Washing Machine 2", category: "washing", status: "Available"});
addEquipment({name: "Washing Machine 3", category: "washing", status: "Available"});

export default function equipmentData() {
    return {
        addEquipment,
        getEquipments,
        modifyEquipment,
        getEquipment
    }
}