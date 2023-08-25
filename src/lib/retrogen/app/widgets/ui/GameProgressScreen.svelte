<script>
	import { selectedScenarious } from '@appRetrogenShared';
	let arrSelectedScenarious = [];

	selectedScenarious.subscribe((value) => {
		arrSelectedScenarious = value;
	});
</script>

<h2 class="text-white">
	Выбрано сценариев для ретроспективы:

	{arrSelectedScenarious.length}
</h2>

<!-- {#each arrSelectedScenarious as scencario}
	<span>scen</span>
{/each} -->
