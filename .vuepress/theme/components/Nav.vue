<template>
  <nav
    class="nav rounded-t flex items-center justify-between flex-wrap text-right pr-0 lg:pr-5 md:pr-3 sm:pr-0 border-b"
  >
    <router-link
      class="w-1/2 md:w-1/3 border border-gray-400 cursor-pointer block m-1 lg:m-4 md:m-2 sm:m-1"
      :to="$withBase('/')"
    >
      <!-- <img src="/images/sig.png"> -->
    </router-link>

    <div v-on:click="openNav()" class="lg:hidden">
      <button
        class="flex m-5 px-3 py-2 border rounded border-white hover:text-orange hover:border-orange"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>
    </div>

    <div class="w-full block justify-end lg:flex lg:w-auto">
      <div class="nav-text text-med lg:flex-grow">
        <span v-for="item in $site.themeConfig.nav">
          <span :class="hidden">
            <router-link
              class="text-sans mr-10 lg:mt-0 no-underline hover:text-yellow-600 hover:underline uppercase"
              :to="$withBase(item.link)"
            >
              {{ item.text }}
              <span class="arrow"></span>
            </router-link>
          </span>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
    data() {
      return {
        hidden: "lg:inline-block md:hidden sm:hidden hidden"
      };
  },
  methods: {
    openNav() {
      if (this.hidden == "lg:inline-block md:hidden sm:hidden hidden")
        this.hidden = "p-2 block";
      else {
        this.hidden = "lg:inline-block md:hidden sm:hidden hidden";
      }
    }
  }
};
</script>