<template lang="html">
  <!-- Toolbar til alle sites -->
  <v-toolbar dark color="secondary">

    <!-- Titel og en toggle button til drawer.vue -->
    <v-toolbar-side-icon
      @click="$store.state.showDrawer = !$store.state.showDrawer"
      class="hidden-md-and-up"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Financial Outsourcing</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- List af ting baseret på vuex og v-for -->
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="(navigation, id) in $store.state.navigations"
        :key="id"
        flat
        router
        :to="navigation.link"
      >
          <v-icon left>{{ navigation.icon }}</v-icon>
          {{ navigation.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
