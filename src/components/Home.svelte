<script>
  import { fly } from 'svelte/transition';
  import { tinyBio, shortBio } from '../../content/home.js';
</script>

<div
  id="home"
  class="mx-auto max-w-screen-lg flex flex-col h-screen justify-center items-start"
  transition:fly={{ y: -100, duration: 2000 }}
>
  <p class="text-purple-400 ml-1 text-xs font-mono">Hi, my name is</p>
  <p class="big-text mt-3 font-semibold">Jack Bowman</p>
  <p class="big-text text-off-gray font-semibold mt-4">
    {tinyBio}
  </p>
  <p class="text-off-gray max-w-md mt-6 mb-10 text-sm">
    {shortBio}
  </p>
  <a href="mailto:jackbow@umich.edu" class="btn px-6 py-4"> Get in touch </a>
</div>

<style lang="stylus">

</style>
