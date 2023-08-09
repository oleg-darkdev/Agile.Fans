<script>
	export let components;

	console.log(components);
</script>

<div class="w-full overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<!-- <th /> -->
				<th>ID</th>

				<th>Title</th>
				<th>Count</th>
			</tr>
		</thead>
		<tbody>
			{#each components as component}
				<tr class="text-black">
					<td>
						{component.id}
					</td>
					<td>
						<div class="flex items-center space-x-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={component.photo} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">{component.title}</div>
								<div class="text-sm ">{component.shortDesc}</div>
							</div>
						</div>
					</td>
					<td>{component.count}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Count</th>
			</tr>
		</tfoot>
	</table>
</div>
