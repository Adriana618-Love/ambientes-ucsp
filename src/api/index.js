import { rooms } from '../assets/rooms'

export const fetchRoomAvailable = (roomName) => {
	return true
}

export const findAllRoomsAvailable = () => {
	console.log(rooms)
	return rooms.filter(room => fetchRoomAvailable(room.nombre))
}
