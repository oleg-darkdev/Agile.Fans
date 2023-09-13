<script>
	export let card, selectedCheckbox;
</script>
<div
	class="group flex   cursor-pointer flex-col rounded-lg p-2    "
>
	<div class="mt-2 mb-6">
    <!-- <div class="prose ">
            <div class="mb-1">
                <div class="flex flex-wrap items-baseline -mt-2">
                    <p class="ml-2">General gist</p>
                </div>
            </div>
          </div> -->
		<h4 class="text-left text-2xl font-bold text-gray-100 group-hover:text-white ">
			{selectedCheckbox.role.lead ? card.lead.title : card.team.title}: {card.title}
		</h4>
		<p class=" mt-2 max-w-md text-left text-gray-300 group-hover:text-white">
			{card.shortDescription}
		</p>
	</div>




            <div class="bg-black  rounded-lg border border-pink-700  flex w-full flex-col mb-4">
              <!-- <img class="rounded-t-lg h-[250px]" src="url({card.img})" alt=""> -->
              <div class="p-4 sm:p-6">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 ">{selectedCheckbox.role.lead ? 'Role: Leader' : 'Role: Team'} <span class=" text-xs font-medium text-pink-700">authority: {selectedCheckbox.role.lead ? card.lead.procent : card.team.procent}%</span>
                </h5>
                <p class="mb-3 font-normal text-gray-300 leading-tight">{selectedCheckbox.role.lead ? card.lead.description : card.team.description}</p>

              </div>
            </div>
          </div>



