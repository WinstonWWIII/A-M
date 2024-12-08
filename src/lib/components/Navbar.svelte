<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { toggleMode } from 'mode-watcher';
	import Button from './ui/button/button.svelte';
	import Separator from './ui/separator/separator.svelte';
</script>

<nav class="sticky top-0 z-10 bg-background py-6">
	<div class="mx-auto flex w-4/6 items-center justify-between">
		<div class="flex items-center">
			<a href="/" class="mr-4 text-3xl">A&M</a>
			<Button href="/" class="text-base hover:font-semibold" variant="link">Anime</Button>
			<Button href="/" class="text-base hover:font-semibold" variant="link">Manga</Button>
		</div>
		<div>
			<Button onclick={toggleMode} variant="outline" size="icon">
				<Sun class=" h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
				<Moon
					class="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
	<Separator class="mx-auto mt-4 h-1 w-4/6" />
</nav>
