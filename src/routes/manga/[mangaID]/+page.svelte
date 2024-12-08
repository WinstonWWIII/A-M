<script lang="ts">
	let { data } = $props();
</script>

<main class="mx-auto flex w-4/6">
	<img src={data.imgURL} alt="" class="rounded-lg" />
	<div class=" ml-8 flex flex-col">
		<p class="text-2xl font-semibold">{data.title}</p>
		<p class="py-4">{data.synopsis}</p>
	</div>
</main>
