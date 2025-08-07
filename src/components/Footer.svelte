<script>
  import Icon from "./Icon.svelte";
  let stargazers_count = $state(0),
    forks_count = $state(0);
  fetch("https://api.github.com/repos/jackbow/jackbow.github.io")
    .then((response) => response.json())
    .then((json) => {
      stargazers_count = json.stargazers_count;
      forks_count = json.forks_count;
    })
    .catch((e) => console.error(e));
</script>

<footer class="w-1/1 flex flex-col items-center mt-36 mb-2">
  <a
    href="http://github.com/jackbow/jackbow.github.io"
    class="p-4 text-off-gray text-xs font-mono hover:text-purple-400 transition duration-400 flex flex-col items-center"
  >
    <p class="mb-2">Built by Jack Bowman</p>
    <div class="flex justify-around w-2/3 text-xs">
      <Icon strokeWidth={1.5} height={18} width={18} name="star-outline" />
      <p class="mr-4">{stargazers_count}</p>
      <Icon strokeWidth={1.5} height={18} width={18} name="git-branch-outline" />
      <p>{forks_count}</p>
    </div>
  </a>
</footer>

<style lang="stylus">

</style>
