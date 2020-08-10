import { findAllRoomsAvailable, fetchRoomAvailable } from './index'

it('Should find all rooms available', () => {
	expect(findAllRoomsAvailable()).toBeDefined()
})

it('Should check if one room is available', () => {
	expect(fetchRoomAvailable('B01  (Cap.: 40)')).toBe(true)
})
