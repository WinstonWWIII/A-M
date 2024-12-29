<script lang="ts">
	import { goto } from '$app/navigation';

	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';

	import Search from 'lucide-svelte/icons/search';

	let value = $state('');

	function onclick() {
		goto(`/search/${value}`);
		value = '';
	}
</script>

<form class="flex w-full max-w-sm items-center space-x-2">
	<Input placeholder="Search Anime and Manga" bind:value />
	<Button variant="outline" size="icon" {onclick}><Search /></Button>
</form>
