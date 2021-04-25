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
    <ion-icon name="logo-github" />
  </a>
  <a href="https://www.linkedin.com/in/jack-bowman-/">
    <ion-icon name="logo-linkedin" />
  </a>
  <ion-icon name="heart" />
</SideInfo>
<SideInfo side="right">
  <a class="text-2xs font-mono column-text" href="mailto:jackbow@umich.edu">jackbow@umich.edu</a>
</SideInfo>
<main class="h-full mx-auto max-w-screen-2xl">
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
