<script>
  export let side;
  import { fade } from 'svelte/transition';
</script>

<div
  class="hidden md:block bottom-0 fixed"
  class:right={side === 'right'}
  class:left={side === 'left'}
  in:fade={{ duration: 1000, delay: 1400 }}
>
  <div class="flex flex-col hover-children">
    <slot />
    <div class={`w-px h-10 bg-off-gray self-center`} />
  </div>
</div>

<style lang="stylus">
  .hover-children > :global(*:not(:last-child)) {
    color: rgb(149, 150, 161);
    @apply transition duration-300 transform mb-3;
    &:hover {
      @apply text-purple-400 -translate-y-1;
    }
  }
  .right {
    @apply right-7;
  }
  .left {
    @apply left-7;
  }
</style>
