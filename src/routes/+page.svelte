<script lang="ts">
	let { data } = $props();
	let topAnimes = data.animeData;
	let topMangas = data.mangaData;

	import Top15 from '$lib/components/Top15.svelte';
</script>

<main class="mx-auto w-4/6">
	<span class="text-xl font-semibold underline underline-offset-4">Top 15 Anime</span>
	<Top15 data={topAnimes} />
	<span class="text-xl font-semibold underline underline-offset-4">Top 15 Manga</span>
	<Top15 data={topMangas} />
</main>
