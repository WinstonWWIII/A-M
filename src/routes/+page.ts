import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const topAnime = await fetch(`https://api.jikan.moe/v4/top/anime?limit=15`);
	const topManga = await fetch(`https://api.jikan.moe/v4/top/manga?limit=15`);

	const topAnimeData = await topAnime.json();
	const topMangaData = await topManga.json();

	console.log(topAnimeData);
	console.log(topMangaData);

	return {
		animeData: topAnimeData.data,
		mangaData: topMangaData.data
	};
};
