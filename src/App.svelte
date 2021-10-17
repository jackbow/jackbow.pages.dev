<script>
  import Header from "./components/Header.svelte";
  import SideInfo from "./components/SideInfo.svelte";
  import Home from "./components/Home.svelte";
  import About from "./components/About.svelte";
  import Experience from "./components/Experience.svelte";
  import Work from "./components/Work.svelte";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import Icon from "./components/Icon.svelte";

  import ScrollReveal from "scrollreveal";
  import { onMount } from "svelte";
  onMount(async () => {
    const delay = 275;
    ScrollReveal().reveal(".scrollreveal", { delay });
    ScrollReveal().reveal(".section-header", { delay });
    ScrollReveal().reveal("#home", { delay });
    ScrollReveal().reveal("footer", { delay });
  });
</script>

<Header />
<SideInfo side="left">
  <a href="https://github.com/jackbow">
    <Icon name="logo-github" />
  </a>
  <a href="https://www.linkedin.com/in/jack-bowman-/">
    <Icon name="logo-linkedin" />
  </a>
  <div>
    <Icon name="heart" />
  </div>
</SideInfo>
<SideInfo side="right">
  <a class="text-xs font-mono column-text" href="mailto:jackbow@umich.edu"> jackbow@umich.edu </a>
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
