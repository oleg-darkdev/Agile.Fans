function findUsersInBoard(board, memberId) {
	const foundObjects = [];

	for (const column of board.columns) {
		for (const obj of column.data) {
			for (const member of obj.members) {
				if (member.id === memberId) {
					foundObjects.push(obj);
					break;
				}
			}
		}
	}

	return foundObjects;
}




export default findUsersInBoard;
