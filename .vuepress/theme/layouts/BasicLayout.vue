<template>
  <div class="markdown-body">
    <h1 class="text-3xl pb-5 pt-5 ml-5 text-sans">{{$page.frontmatter.title}}</h1>

    <div class="text-gray-800 p-5">
      <Content/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicLayout"
};
</script>