<script>
  import Media from "./Media.svelte";
  import Icon from "./Icon.svelte";
  import work from "../../content/work.js";
</script>

<div id="work" class="mt-48 mx-auto max-w-screen-lg py-96 2xs:py-48 xs:py-28 sm:py-24 md:py-20 lg:py-14">
  <h1 class="section-header">Some Things I’ve Built</h1>
  {#each work as project, index (index)}
    <div class="project-container justify-items-end grid items-center gap-2 mb-10 mt-2">
      <!-- content div -->
      <div
        class="z-2 relative p-5 md:z-auto px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0"
        class:content-right={index % 2 === 0}
        class:content-left={index % 2 === 1}
      >
        <p class="z-2 relative text-2xl font-semibold scrollreveal">{project.title}</p>
        <div class="z-2 content-desc relative scrollreveal rounded p-0 md:p-4 mt-4 text-gray-300 text-sm md:shadow-xl">
          {project.description}
        </div>
        <div
          class="flex space-x-4 scrollreveal mt-4 font-mono text-xs z-2 relative text-off-gray"
          class:md:justify-start={index % 2 == 1}
          class:md:justify-end={index % 2 == 0}
        >
          {#each project.tech as tech}
            <p class="inline">{tech}</p>
          {/each}
        </div>
        <div
          class="scrollreveal mt-4 flex space-x-4"
          class:md:justify-start={index % 2 == 1}
          class:md:justify-end={index % 2 == 0}
        >
          {#if project.github}
            <a aria-label="project source code" href={project.github}>
              <Icon
                width={32}
                height={32}
                classes="text-off-gray text-3xl hover:text-purple-400 transition duration-400 inline"
                name="logo-github"
              />
            </a>
          {/if}
          {#if project.url}
            <a aria-label="project website" href={project.url}>
              <Icon
                width={32}
                height={32}
                classes="text-off-gray text-3xl hover:text-purple-400 transition duration-400 inline"
                name="external-link"
              />
            </a>
          {/if}
        </div>
      </div>
      <!-- media div -->
      <div class="z-1 scrollreveal h-full" class:picture-right={index % 2 === 1} class:picture-left={index % 2 === 0}>
        {#if project.img}
          <Media project>
            <img
              loading="lazy"
              class="object-cover object-center h-full w-full"
              src={`/media/projects/${project.img}`}
              alt="Project screenshot"
            />
            <!-- <img
              loading="lazy"
              class="object-cover object-center h-full w-full"
              srcset={
                [1, 0.75, 0.5, 0.25].map(n =>
                  `/media/projects/${project.imgName}-${Math.round(project.imgWidth * n)}w.${project.imgExtension} ${1 / n}x`
                ).join(", ")
              }
              src={`/media/projects/${project.imgName}-${project.imgWidth}w.${project.imgExtension}`}
              width="680px"
              alt="Project screenshot"
            /> -->
          </Media>
        {:else if project.video}
          <Media project>
            <video autoplay muted loop src={"/media/projects/" + project.video} type="video/webm" />
          </Media>
        {/if}
      </div>
    </div>
  {/each}
</div>

<style lang="stylus">
.project-container {
  grid-template-columns: repeat(16, 1fr);
}
.content-right {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    @apply text-right;
    grid-area: 1 / 8 / -1 / -1;
  }
}
.content-left {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    grid-area: 1 / 1 / -1 / 10;
  }
}
.picture-right {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    grid-area: 1 / 8 / -1 / -1;
  }
}
.picture-left {
  grid-area: 1 / 1 / -1 / -1;
  @media (min-width: 768px) {
    grid-area: 1 / 1 / -1 / 10;
  }
}
.content-desc {
  @media (min-width: 768px) {
    background: #322B55;
    color: rgb(168, 178, 209);
  }
}
</style>
