<template>
  <div class="" >
    <Menu/>
        <h1 class="">{{titre}}</h1>
          <RouterView/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './components/Menu.vue'
import {RouterView} from "vue-router"

export default defineComponent({
  data() {
    return {
      titre: 'SkyScanner' as string
    }
  },
  components:{
        Menu,
        RouterView
    },
  methods: {
    }
});
</script>


