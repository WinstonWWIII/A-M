<script lang="ts">
	let { data } = $props();

	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
</script>

<main class="mx-auto w-4/6">
	<div class="mt-4 flex flex-wrap">
		{#each data.animeData as anime}
			{@const imgURL = anime.images.jpg.image_url}
			{@const ID = anime.mal_id}
			<HoverCard.Root openDelay={400} closeDelay={200}>
				<HoverCard.Trigger
					href="/anime/{ID}"
					class="flex basis-1/5 flex-col justify-center rounded-[2rem] p-4 transition hover:ring-2 "
				>
					<img src={imgURL} alt="" class="rounded-lg" />
					<span class="mt-2">{anime.title}</span>
				</HoverCard.Trigger>
				<HoverCard.Content class="" side="bottom">
					<div>Year: {anime.year == null ? 'N/A' : anime.year}</div>
					<div>Episodes: {anime.episodes}</div>
					<div>Status: {anime.status}</div>
					<div>Score: {anime.score}</div>
				</HoverCard.Content>
				<HoverCard.Trigger />
			</HoverCard.Root>
		{/each}

		{#each data.mangaData as manga}
			{@const imgURL = manga.images.jpg.image_url}
			{@const ID = manga.mal_id}
			<HoverCard.Root openDelay={400} closeDelay={200}>
				<HoverCard.Trigger
					href="/anime/{ID}"
					class="flex flex-col justify-center rounded-[2rem] p-4 transition hover:ring-2"
				>
					<img src={imgURL} alt="" class="rounded-lg" />
					<span class="mt-2">{manga.title}</span>
				</HoverCard.Trigger>
				<HoverCard.Content class="" side="bottom">
					<div>Status: {manga.status}</div>
					<div>Score: {manga.score}</div>
				</HoverCard.Content>
				<HoverCard.Trigger />
			</HoverCard.Root>
		{/each}
	</div>
</main>
