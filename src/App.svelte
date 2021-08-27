<script>
  import Header from './components/Header.svelte';
  import SideInfo from './components/SideInfo.svelte';
  import Home from './components/Home.svelte';
  import About from './components/About.svelte';
  import Experience from './components/Experience.svelte';
  import Work from './components/Work.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';

  import ScrollReveal from 'scrollreveal';
  import { onMount } from 'svelte';
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
    <!-- github icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
    </svg>
  </a>
  <a href="https://www.linkedin.com/in/jack-bowman-/">
    <!-- linkedin icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <line x1="8" y1="11" x2="8" y2="16"></line>
      <line x1="8" y1="8" x2="8" y2="8.01"></line>
      <line x1="12" y1="16" x2="12" y2="11"></line>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </svg>
  </a>
  <!-- heart icon -->
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
  </svg>
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
