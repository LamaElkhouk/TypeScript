<template>
  <div class="header">
    <Menu/>
          <RouterView/>
    </div>
    <Footer/>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import {RouterView} from "vue-router"

export default defineComponent({
  data() {
    return {
      
    }
  },
  components:{
        Menu,
        RouterView,
        Footer
    },
  methods: {
    }
});
</script>


