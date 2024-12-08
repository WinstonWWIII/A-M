import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
	const { animeID } = params;
	const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}/full`);

	const data = await response.json();
	return {
		title: data.data.title
	};
};
