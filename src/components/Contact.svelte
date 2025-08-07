<script>
  import { contactBlurb } from "../../content/contact.js";
  import { resumeUrl } from "../../content/resume.js";
</script>

<div id="contact" class="w-full flex flex-col items-center xs:pt-10 sm:pt-18 md:pt-24 lg:pt-28">
  <h1 class="scrollreveal font-mono text-sm text-purple-400">What's next?</h1>
  <p id="action" class="scrollreveal text-6xl font-semibold mt-2 text-center">Get in touch</p>
  <p class="scrollreveal w-2/3 lg:w-1/3 mt-5 text-center text-md text-off-gray">
    {contactBlurb}
  </p>
  <div class="mt-8 space-x-4 scrollreveal">
  <a href="mailto:jackbow@umich.edu" class="btn px-6 py-4"> Say Hello </a>
  <a href={resumeUrl} class="btn px-6 py-4"> View Resume </a>
  </div>
</div>

<style lang="stylus">
  #action {
    font-size: clamp(2rem, 10vw, 3rem);
  }
  h1:before {
    counter-increment: section-counter;
    content: "0" counter(section-counter) ". ";
  }
</style>
