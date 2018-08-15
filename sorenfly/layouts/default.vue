<template>
  <v-app>
    <drawer />
    <navigation />

    <nuxt />
  </v-app>
</template>

<script type="text/javascript">
import Navigation from '@/components/navigation/navigation'
import Drawer from '@/components/navigation/drawer'

export default {
  components: {
    Navigation,
    Drawer
  }
}
</script>
