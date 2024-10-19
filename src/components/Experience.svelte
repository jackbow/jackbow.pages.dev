<script>
  import { blur } from "svelte/transition";
  import jobs from "../../content/jobs.js";
  let tab = 0;
  $: job = jobs[tab];
  const setTab = (i) => {
    tab = i;
  };
</script>

<div id="experience" class="mx-auto max-w-xl py-16 md:py-20">
  <h1 class="section-header mb-1">Where I've Worked</h1>
  <div class="sm:flex">
    <div class="flex overflow-y-auto w-max max-w-full flex-row sm:flex-col mb-6 mr-4">
      {#each jobs as job, index (index)}
        <button
          class:active={tab === index}
          class="tab scrollreveal text-center sm:text-left text-xs px-4 py-3 font-mono cursor-pointer transition-all duration-300 ease-in-out"
          on:click={() => {
            setTab(index);
          }}
        >
          {job.company}
        </button>
      {/each}
    </div>
    <div>
      {#key job}
        <div class="absolute clamp-margin" transition:blur={{ duration: 1000 }}>
          <h1 class="scrollreveal">
            <span>{job.title}</span>
            <a href={job.link}>@ {job.company}</a>
          </h1>
          <p class="text-sm text-off-gray font-mono font-light mb-4 mt-1 scrollreveal">
            {job.range}
          </p>
          <ul class="text-off-gray text-md">
            {#each job.bullets as bullet, index (index)}
              <li class="text-sm mb-3 scrollreveal">{bullet}</li>
            {/each}
          </ul>
        </div>
      {/key}
    </div>
  </div>
</div>

<style lang="stylus">
.clamp-margin {
  margin-right: 16px;
  @media (min-width: 640px) {
    max-width: 600px;
    margin-right: 12vw;
  }
}
.tab {
  color: #5f6368;
  &.active {
    @apply text-purple-400
  }
  @media (max-width: 640px) {
    border-bottom: 2px solid #5f6368;
    &.active {
      border-bottom: 2px solid rgb(167, 139, 250);
    }
  }
  @media (min-width: 640px) {
    border-left: 2px solid #5f6368;
    &.active {
      border-left: 2px solid rgb(167, 139, 250);
    }
  }
  &:hover {
    @apply text-purple-400;
    background: rgba(255, 255, 255, 0.05);
  }
}
</style>
