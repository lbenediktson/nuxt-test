<template lang="html">
  <!-- Vuetify Drawer, som bliver toggled af burgerknappen i navigation.vue -->
  <v-navigation-drawer
    absolute
    temporary
    v-model="$store.state.showDrawer"
  >
    <v-list>

      <!-- Liste baseret på vuex navigation objekt og v-for -->
      <v-list-tile
        v-for="(navigation, id) in $store.state.navigations"
        :key="id"
        router
        :to="navigation.link"
      >
        <v-list-tile-action>
          <v-icon>{{ navigation.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          {{ navigation.title }}
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
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
