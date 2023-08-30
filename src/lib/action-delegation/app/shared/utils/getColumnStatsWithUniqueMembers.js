function getColumnStatsWithUniqueMembers(board) {
	const columnStats = [];

	for (const column of board.columns) {
		const uniqueMembers = new Map();

		for (const obj of column.data) {
			for (const member of obj.members) {
				uniqueMembers.set(member.id, member);
			}
		}

		columnStats.push({
			columnTitle: column.title,
			tasksCounter: column.data.length,
			uniqueMembers: Array.from(uniqueMembers.values())
		});
	}

	return columnStats;
}


export default getColumnStatsWithUniqueMembers;
