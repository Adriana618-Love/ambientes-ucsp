import _rooms from './rooms.json'

const assignBy = key => (data, item) => {
	data[item[key]] = item;
	return data;
}

export const rooms = _rooms
export const normalizedRooms = _rooms.reduce(assignBy("nombre"), {});
