function countTasksInColumnsExceptBacklog(board) {
	let taskCounts = 0;

	for (const column of board.columns) {
		if (column.title !== 'Backlog') {
			taskCounts = taskCounts + column.data.length;
		}
	}

	return taskCounts;
}

export default countTasksInColumnsExceptBacklog;
