<script>
  export let order;
  export let src;
  export let alt;
  export let href;
  export let year;

  $: timeClass = order
    ? `animate__animated op0 end-${2 * order - 1}:op0 start-${
        2 * order - 1
      }:animate__fadeIn`
    : '';
  $: imgClass = order
    ? `animate__animated op0 end-${2 * order}:op0 start-${
        2 * order
      }:animate__fadeIn`
    : '';
</script>

<div class="Step">
  <a class={imgClass} {href} target="_blank">
    <img class="h-40 mx-12 rounded-6" {src} {alt} />
  </a>
  <time class={timeClass} datetime={year}>
    {year}
  </time>
</div>

<style>
  .Step {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
  }
</style>
