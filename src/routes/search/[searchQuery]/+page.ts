import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
	const { searchQuery } = params;
	const searchAnime = await fetch(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
	const searchManga = await fetch(`https://api.jikan.moe/v4/manga?q=${searchQuery}`);

	const searchAnimeData = await searchAnime.json();
	const searchMangaData = await searchManga.json();

	return {
		animeData: searchAnimeData.data,
		mangaData: searchMangaData.data
	};
};
