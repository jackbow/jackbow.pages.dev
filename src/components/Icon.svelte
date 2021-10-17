<script>
  export let name,
    width = 24,
    height = 24,
    strokeWidth = 2,
    classes = "";
  import icons from "../../content/icons.js";
</script>

<span class={classes}>
  {@html icons[name](width, height, strokeWidth)}
</span>
