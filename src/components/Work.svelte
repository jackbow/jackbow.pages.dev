<script>
  import Media from './Media.svelte';
  import work from '../../content/work.js';
</script>

<div id="work" class="mt-48 mx-auto max-w-screen-lg py-96 2xs:py-48 xs:py-28 sm:py-24 md:py-20 lg:py-14">
  <h1 class="section-header">Some Things I’ve Built</h1>
  {#each work as project, index (index)}
    <div class="project-container justify-items-end grid items-center gap-2 mb-10 mt-2">
      <!-- content div -->
      <div
        class="z-2 p-5 md:z-auto px-2 2xs:px-4 xs:px-8 sm:px-10 md:px-0"
        class:content-right={index % 2 === 0}
        class:content-left={index % 2 === 1}
      >
        <p class="text-2xl font-semibold scrollreveal">{project.title}</p>
        <div class="z-2 content-desc relative scrollreveal rounded p-0 md:p-4 mt-4 text-off-gray text-sm md:shadow-xl">
          {project.description}
        </div>
        <div class="project-tech scrollreveal mt-4 font-mono text-xs text-off-gray">
          {#each project.tech as tech}
            <p class="inline">{tech}</p>
          {/each}
        </div>
        <div class="project-links scrollreveal mt-4">
          {#if project.github}
            <a href={project.github}>
              <ion-icon class="text-off-gray text-3xl" name="logo-github" />
            </a>
          {/if}
          {#if project.url}
            <a href={project.url}>
              <ion-icon class="text-off-gray text-3xl" name="log-out-outline" />
            </a>
          {/if}
        </div>
      </div>
      <!-- media div -->
      <div class="z-1 scrollreveal h-full" class:picture-right={index % 2 === 1} class:picture-left={index % 2 === 0}>
        {#if project.img}
          <Media project>
            <img
              class="object-cover object-center h-full w-full"
              src={'/media/projects/' + project.img}
              alt="Project screenshot"
            />
          </Media>
        {:else if project.video}
          <Media project>
            <video autoplay muted loop src={'/media/projects/' + project.video} type="video/webm" />
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
.project-tech {
  @media (max-width: 428px) {
    @apply flex flex-wrap;
  }
}
.content-right .project-tech p {
  @media (min-width: 768px) {
    @apply mr-0 ml-6;
  }
  @apply ml-0 mr-6;
}
.content-left .project-tech p {
  @apply mr-6;
}
.content-right .project-links a ion-icon {
  @media (min-width: 768px) {
    @apply ml-4 mr-0;
  }
  @apply mr-4 ml-0;
}
.content-left .project-links a ion-icon {
  @apply mr-4;
}
</style>
