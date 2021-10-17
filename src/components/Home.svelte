<script>
  import { fly } from "svelte/transition";
  import { tinyBio, shortBio } from "../../content/home.js";
  const delayBase = 600;
  const delayStep = 100;
</script>

<div id="home" class="mx-auto max-w-screen-lg flex flex-col h-screen justify-center items-start">
  <p
    class="text-purple-400 ml-1 text-sm font-mono"
    in:fly={{ y: -100, duration: 2000, delay: delayBase + delayStep * 0 }}
  >
    Hi, my name is
  </p>
  <p class="big-text mt-3 font-semibold" in:fly={{ y: -100, duration: 2000, delay: delayBase + delayStep * 1 }}>
    Jack Bowman.
  </p>
  <p
    class="big-text text-off-gray font-semibold mt-4"
    in:fly={{ y: -100, duration: 2000, delay: delayBase + delayStep * 2 }}
  >
    {tinyBio}
  </p>
  <p
    class="text-off-gray max-w-md mt-6 mb-10 text-md"
    in:fly={{ y: -100, duration: 2000, delay: delayBase + delayStep * 3 }}
  >
    {shortBio}
  </p>
  <a
    href="mailto:jackbow@umich.edu"
    class="btn px-6 py-4"
    in:fly={{ y: -100, duration: 2000, delay: delayBase + delayStep * 4 }}
  >
    Get in touch
  </a>
</div>

<style lang="stylus">

</style>
