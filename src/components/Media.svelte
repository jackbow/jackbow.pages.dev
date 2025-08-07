<script>
  let { border = false, constrained = false, project = false, centered = false, children } = $props();
</script>

<div
  class="media-wrapper"
  class:project
  class:centered
  class:media-wrapper-border={border}
  class:media-wrapper-constrained={constrained}
>
  {@render children()}
</div>

<style lang="stylus">
  .media-wrapper {
    @apply relative block w-full h-full box-border rounded;
    background-color: rgb(167, 139, 250);

    &.centered {
      @media (max-width: 767px) {
        margin: 50px auto 0;
      }
    }

    &:focus,
    &:hover {
      outline: 0;
      &:after {
        top: 15px;
        left: 15px;
      }
      &.project {
        @media (min-width: 768px) {
          background: transparent;
          & > :global(*) {
            filter: none;
            mix-blend-mode: normal;
          }
        }
      }
      &:not(.project) {
        background: transparent;
        & > :global(*) {
          filter: none;
          mix-blend-mode: normal;
        }
      }
    }

    & > :global(*) {
      @apply relative transition-all duration-300 rounded;
      @media (min-width: 768px) {
        filter: grayscale(100%) contrast(1);
        mix-blend-mode: multiply;
      }
    }
    &.project > :global(*) {
      filter: grayscale(100%) contrast(1);
      mix-blend-mode: multiply;
    }

    &.project:before,
    &.project:after {
      content: '';
    }
    &:before,
    &:after {
      @media (min-width: 768px) {
        content: '';
      }
      @apply block absolute w-full h-full rounded transition duration-300;
    }

    &.project:before {
      @media (max-width: 767px) {
        background-color: rgb(60 27 90);
        mix-blend-mode: darken;
      }
    }

    &:before {
      @apply top-0 left-0 mix-blend-screen;
      background-color: purple;
    }

    &:after {
      top: 20px;
      left: 20px;
      border: 0px solid transparent;
      z-index: -1;
    }
  }
  .media-wrapper-border:after {
    border: 2px solid white;
    top: 20px;
    left: 20px;
    z-index: -1;
  }
  .media-wrapper-constrained {
    @media (min-width: 768px) {
      max-height: 300px;
      max-width: 300px;
      height: 28vmax;
      width: 28vmax;
    }
    @media (max-width: 767px) {
      max-height: 500px;
      max-width: 500px;
      height: 50vw;
      width: 50vw;
    }
  }
</style>
