import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
	const { mangaID } = params;
	const response = await fetch(`https://api.jikan.moe/v4/manga/${mangaID}/full`);

	const data = await response.json();
	return {
		title: data.data.title
	};
};