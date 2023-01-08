<template>
  <div class="" >
    <Menu/>
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


