<script lang="ts">
	let { data } = $props();

	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
</script>

<Carousel.Root
	opts={{
		align: 'start',
		skipSnaps: true
	}}
	class="m-6"
>
	<Carousel.Content>
		{#each data as top15, i}
			{@const imgURL = top15.images.jpg.image_url}
			{@const isAnime = top15.hasOwnProperty('episodes')}
			{@const ID = top15.mal_id}
			<Carousel.Item class="basis-1/3 md:basis-1/5">
				<div class="p-1">
					<span class="pl-4 text-lg font-bold">{i + 1}</span>
					<HoverCard.Root openDelay={400} closeDelay={200}>
						{#if isAnime}
							<HoverCard.Trigger
								href="/anime/{ID}"
								class="flex flex-col rounded-[2rem] p-4 transition hover:ring-2"
							>
								<img src={imgURL} alt="" class="rounded-lg" />
								<span class="mt-2">{top15.title}</span>
							</HoverCard.Trigger>
							<HoverCard.Content class="text-center" side="bottom"
								>{top15.year == null ? 'N/A' : top15.year}
								{top15.episodes}
								{top15.status}
								{top15.rating}
								{top15.score}</HoverCard.Content
							>
						{:else}
							<HoverCard.Trigger
								href="/manga/{ID}"
								class="flex flex-col rounded-lg p-6 transition hover:ring-2"
							>
								<img src={imgURL} alt="" class="rounded-lg" />
								<span class="mt-2">{top15.title}</span>
							</HoverCard.Trigger>
							<HoverCard.Content class="text-center" side="bottom">
								{top15.status}
								{top15.score}</HoverCard.Content
							>
						{/if}
					</HoverCard.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
