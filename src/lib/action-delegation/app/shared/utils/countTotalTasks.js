function countTotalTasks(board) {
	let totalTaskCount = 0;

	for (const column of board.columns) {
		totalTaskCount += column.data.length;
	}

	return totalTaskCount;
}


export default countTotalTasks;
