<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<ModeWatcher />
<Navbar />
{@render children()}
