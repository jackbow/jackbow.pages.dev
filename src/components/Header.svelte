<script>
  import { fly } from "svelte/transition";
  import Icon from "./Icon.svelte";

  const resumeUrl = "https://drive.google.com/file/d/1WIp7ROSmk95ZSGt-f3s6llsv7N_tEJ4I/view?usp=sharing";
  let navMenuOpen = false;
  const toggleNavMenu = () => {
    navMenuOpen = !navMenuOpen;
    window.document.body.classList.toggle("noscroll");
  };

  export let offset = 50;
  export let tolerance = 0;

  let width;
  let showHeader = true;
  let y = 0;
  let lastY = 0;

  const updateClass = (y) => {
    const dy = lastY - y;
    lastY = y;
    if (y < offset) {
      return "show";
    } else if (Math.abs(dy) <= tolerance) {
      return showHeader;
    } else if (dy < 0) {
      return "hide";
    } else {
      return "show";
    }
  };

  $: showHeader = updateClass(y) === "show";
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />
<div
  id="blur-filter"
  class="z-10 h-full w-1/3 fixed transition-all duration-300"
  class:open={navMenuOpen}
  on:click={() => {
    toggleNavMenu();
  }}
/>
<div
  id="nav-menu"
  class="fixed transition-all duration-300 top-0 w-2/3 h-full z-20 flex flex-col items-center justify-center"
  class:open={navMenuOpen}
>
  {#each ["About", "Experience", "Work", "Contact"] as section, index}
    <div class="font-mono flex-col flex items-center text-md">
      <p class="inline text-purple-400">0{index + 1}.</p>
      <a
        on:click={() => {
          toggleNavMenu();
        }}
        href={`#${section.toLowerCase()}`}
        class="hover:text-purple-400 transition duration-300"
      >
        <p class="inline text-off-gray text-lg">{section}</p>
      </a>
    </div>
  {/each}
  <a href={resumeUrl} class="btn text-sm px-8 py-4">Resume</a>
</div>
<div
  id="header"
  class="-translate-y-full transform transition-transform duration-300 flex items-center fixed top-0 w-full z-20"
  class:show={showHeader}
  class:at-top={y > 50}
  class:nav-closed={!navMenuOpen}
>
  {#if width >= 768}
    <spacer />
  {/if}
  <a href="#home" in:fly={{ y: -100, duration: 1000, delay: 0 }}> home </a>
  <spacer class="flex-grow" />
  {#if width < 768}
    {#key navMenuOpen}
      <button
        aria-label="open menu"
        on:click={() => {
          toggleNavMenu();
        }}
      >
        <Icon name={navMenuOpen ? "close" : "menu"} classes="text-purple-400 text-5xl z-30 cursor-pointer right-0" />
      </button>
    {/key}
  {:else}
    {#each ["About", "Experience", "Work", "Contact"] as section, index}
      <a
        href={`#${section.toLowerCase()}`}
        class="text-xs font-mono py-2 hover:text-purple-400 transition duration-300"
        in:fly={{ y: -100, duration: 1000, delay: index * 100 }}
      >
        <p class="inline text-purple-400">0{index + 1}.</p>
        <p class="inline text-off-gray ">{section}</p>
      </a>
    {/each}
    <a href={resumeUrl} class="btn px-4 py-2" in:fly={{ y: -100, duration: 1000, delay: 500 }}> Resume </a>
    <spacer />
  {/if}
</div>

<style lang="stylus">
  :global(body.noscroll) {
    overflow: hidden;
  }
  #header {
    & > :global(*) {
      @apply m-3;
    }
    &.show {
      @apply translate-y-0;
    }
    &.nav-closed {
      @apply backdrop-blur-lg backdrop-filter;
      &.at-top {
        @apply shadow-lg;
      }
    }
  }
  #blur-filter {
    left: -100%;
    &.open {
      @apply: backdrop-filter backdrop-blur-lg left-0;
    }
  }
  #nav-menu {
    right: -100%;
    background-color: #351e40;
    &.open {
      @apply right-0;
    }
    & > :global(*) {
      @apply m-7;
    }
  }
</style>
