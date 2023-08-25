<script>
	import { LargeBtn } from '@coreSharedLayout';
	// '$coreShared'
	import { ComponentsTable, TextInstruction } from '@appRetrogenEntities';

     export let data;
</script>


<section class=" flex w-full justify-center py-20">
	<div
		class="mx-4  mx-4 h-auto max-w-sm rounded rounded-xl bg-primary py-5 md:max-w-2xl md:px-6 lg:max-w-4xl lg:px-8"
	>
<div
					class="m-2 rounded-xl flex flex-row  border-2 border-pink-700 p-3 text-pink-500 text-pink-500 hover:bg-pink-700 hover:text-white"
				>
					<div> {#each data.tool.desc as desc}
						<p class="mb-0  ">
							{desc}
						</p>
					{/each}</div>
          <a href='../' class="btn btn-square btn-white btn-outline ">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </a>
				</div>




				<ComponentsTable components={data.tool.components} />

				<TextInstruction
					title="Preparation"
					desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
					steps={data.tool.preparation}
				/>

				<TextInstruction
					title="Instruction"
					desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups."
					steps={data.tool.instruction}
				/>

				<a href=''
					
					class="btn-lg btn mx-6 mx-auto mt-6 mb-4 w-8/12 max-w-2xl bg-pink-600"
					>Go to app</a
				> 
        </div>
      </section>