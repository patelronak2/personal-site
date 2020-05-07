<template>
  <nav class="blue lighten-5">
    <v-toolbar flat floating tile dense class="ma-6" color="blue lighten-5">
      <v-btn class="purple darken-4" @click="drawer = !drawer" dark>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="indigo darken-4"
      dark
      floating
      mini-variant
      mini-variant-width="120"
      style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
    >
      <v-list class="text-center">
        <v-list-item>
          <v-img src="../assets/logo.svg"></v-img>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list class="text-center" shaped>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="{ name: item.route }"
          exact
        >
          <v-list-item-content>
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home", route: "Home" },
        { title: "About", icon: "mdi-information-variant", route: "About" },
        {
          title: "Resume",
          icon: "mdi-file-document-edit-outline",
          route: "Resume"
        },
        { title: "Portfolio", icon: "mdi-view-dashboard", route: "Work" }
        // { title: "Blog", icon: "mdi-post-outline", route: "Blog" }
      ]
    };
  }
};
</script>
