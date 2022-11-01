<template>
  <v-app>
    <v-main>
      <MenuPrincipal/>
      <!-- <h1>Calendario</h1>
      <ElementosAll/>
      <h1>Botones</h1>
      <BotonesAll/>
      <h1>Barra</h1>
      <BarraFlotan/> -->

    </v-main>
    <router-view>

    </router-view>

  </v-app>
    
</template>

<script>

import MenuPrincipal from './components/MenuPrincipal.vue';
/* import ElementosAll from './components/ElementosAll.vue';
import BotonesAll from './components/BotonesAll.vue';
import BarraFlotan from './components/BarraFlotan.vue'; */
export default {
  name: 'App',

  components: {
    MenuPrincipal,
    /* ElementosAll,
    BotonesAll,
    BarraFlotan */
  },

  data: () => ({
    //
  }),
};
</script>
