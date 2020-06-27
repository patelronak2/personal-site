<template>
  <v-container fluid>
    <transition-group name="list-complete" tag="div" class="row">
      <v-col
        v-for="project in fileterdProjects"
        :key="project.id"
        class="d-flex child-flex"
        style="transition: all 1s"
        cols="6"
        md="4"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="d-flex"
            :style="{
              position: 'relative',
              top: hover ? '-10px' : '0px',
              transition: '0.5s'
            }"
          >
            <v-img
              :src="
                `https://picsum.photos/500/300?image=${project.id * 5 + 10}`
              "
              :lazy-src="
                `https://picsum.photos/10/6?image=${project.id * 5 + 10}`
              "
              aspect-ratio="1"
              class="grey lighten-2 white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              max-height="250"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue lighten-5 v-card--reveal display-3"
                  style="height: 100%;"
                >
                  <p>
                    <v-btn
                      icon
                      class="ma-2"
                      :href="project.github"
                      target="_blank"
                    >
                      <v-icon large color="indigo darken-4">mdi-github</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      class="ma-2"
                      @click="$emit('more-info', project.id)"
                    >
                      <v-icon large color="indigo darken-4"
                        >mdi-information-outline</v-icon
                      >
                    </v-btn>
                  </p>
                </div>
              </v-expand-transition>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-card-text>
                <div class="title">{{ project.name }}</div>
              </v-card-text>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </transition-group>
  </v-container>
</template>
<script>
export default {
  name: "Projectscontainer",
  props: {
    fileterdProjects: Array
  }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}

.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: translateY(30px); */
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
.list-complete-leave-active {
  position: absolute;
}
.list-complete-move {
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
