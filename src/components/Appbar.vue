<template>
  <v-app-bar color="deep-purple darken-4" dark app>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img
          alt="Navodaya Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="50"
        />
      </router-link>
    </div>
    <v-toolbar-title>RONAK PATEL</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text exact :to="{ name: 'Home' }"
        ><v-icon>mdi-home</v-icon><span class="px-1">Home</span></v-btn
      >
      <v-btn text :to="{ name: 'About' }"
        ><v-icon>mdi-information-variant</v-icon
        ><span class="px-1">About</span></v-btn
      >
      <v-btn text :to="{ name: 'Resume' }"
        ><v-icon>mdi-file-document-edit-outline</v-icon
        ><span class="px-1">Resume</span></v-btn
      >
      <v-btn text :to="{ name: 'Work' }"
        ><v-icon>mdi-view-dashboard</v-icon
        ><span class="px-1">Portfolio</span></v-btn
      >
    </v-toolbar-items>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="$emit('toggleDrawer')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>
<script>
export default {
  name: "Appbar"
};
</script>
