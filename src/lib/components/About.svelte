<script>
	import Media from './Media.svelte';
	import about from '$lib/content/about.js';
	import meImg from '$lib/media/me.webp';
</script>

<div id="about" class="mx-auto max-w-3xl py-16 md:py-20">
	<h1 class="section-header">About Me</h1>
	<div class="md:grid grid-layout md:gap-10">
		<div class="text-md text-off-gray">
			{#each about.paragraphs as paragraph}
				<p class="mb-4 scrollreveal">
					{paragraph}
				</p>
			{/each}
			<ul
				class="font-mono text-xs xs:text-sm grid gap-2 grid-cols-3 grid-rows-2 grid-flow-col scrollreveal"
			>
				{#each about.bullets as bullet}
					<li>{bullet}</li>
				{/each}
			</ul>
		</div>
		<!-- header blur gets disabled when this following div is removed (very mysterious) -->
		<div class="z-0 scrollreveal">
			<Media border constrained centered>
				<img src={meImg} alt="yours truly" loading="lazy" />
				<!-- <img
					loading="lazy"
          width="400px"
          srcset={
            [1, 0.75, 0.5, 0.25].map(n =>
              `/media/me-${Math.round(400 * n)}w.webp ${1 / n}x`
            ).join(", ")
          }
          src="/media/me.webp"
          alt="yours truly"
        /> -->
			</Media>
		</div>
	</div>
</div>

<style lang="stylus">
  .grid-layout {
    grid-template-columns: 3fr 2fr;
  }
</style>
