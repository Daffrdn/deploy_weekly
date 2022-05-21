<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Homepage',
          to: '/',
        }, 
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue Fundamental',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue CLI',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue Component',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue Helpers',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue Data',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue Quality Control',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Vue UI Framework',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Nuxt',
          to: '/inspire',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Graphql',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Daffa Erdian Fahrezy - Vue JS - D',
    }
  },
}
</script>
