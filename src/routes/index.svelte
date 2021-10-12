<script>
	import Header from '$lib/components/Header.svelte';
	import SideInfo from '$lib/components/SideInfo.svelte';
	import Home from '$lib/components/Home.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Work from '$lib/components/Work.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { onMount } from 'svelte';
	import ScrollReveal from 'scrollreveal?client';
	onMount(async () => {
		const delay = 275;
		ScrollReveal().reveal('.scrollreveal', { delay });
		ScrollReveal().reveal('.section-header', { delay });
		ScrollReveal().reveal('#home', { delay });
		ScrollReveal().reveal('footer', { delay });
	});
</script>

<Header />
<SideInfo side="left">
	<a href="https://github.com/jackbow">
		<ion-icon name="logo-github" />
	</a>
	<a href="https://www.linkedin.com/in/jack-bowman-/">
		<ion-icon name="logo-linkedin" />
	</a>
	<ion-icon name="heart" />
</SideInfo>
<SideInfo side="right">
	<a class="text-xs font-mono column-text" href="mailto:jackbow@umich.edu">jackbow@umich.edu</a>
</SideInfo>
<main class="mx-auto h-full max-w-screen-3xl">
	<Home />
	<About />
	<Experience />
	<Work />
	<Contact />
</main>
<Footer />

<style lang="stylus">
  :global(html) {
    counter-reset: section-counter;
    background: rgb(30, 26, 51);
    @apply text-gray-200;
    scroll-behavior: smooth;
    font-family: "Calibre","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
  }
  main {
    padding: 0 10vw;
  }
</style>
