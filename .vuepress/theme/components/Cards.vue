<template>
  <div>
    <div v-for="item in $page.frontmatter.cards" class="w-1/4 m-2 cursor-pointer bg-white max-w-sm rounded shadow-lg text-center">
      <div class="px-6 py-2">  
        <div class="text-blue-darkest font-bold text-xl mb-2">{{item.title}}</div>
          <p class="text-blue-darker">
            {{item.blurb}}
          </p>
      </div>  
    </div> 
  </div>
</template>

<script>
export default {
  name: "Cards"
};
</script>