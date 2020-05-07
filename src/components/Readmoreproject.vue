<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <v-container fluid>
          <div class="headline text-center pa-3 font-weight-bold">
            {{ project.name }}
          </div>
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="6" class="text-center my-auto">
                <div v-if="project.links">
                  <v-btn
                    class="ma-2"
                    color="black"
                    dark
                    :href="project.links.github"
                    target="_blank"
                    v-if="project.links.github"
                  >
                    <v-icon dark>mdi-github</v-icon> GitHub
                  </v-btn>
                  <v-btn
                    class="ma-2"
                    color="indigo"
                    dark
                    :href="project.links.projectlink"
                    target="_blank"
                    v-if="project.links.projectlink"
                  >
                    <v-icon dark>mdi-link-variant</v-icon> Visit
                  </v-btn>
                  <v-btn
                    class="ma-2"
                    color="red"
                    dark
                    :href="project.links.youTube"
                    target="_blank"
                    v-if="project.links.youTube"
                  >
                    <v-icon dark>mdi-youtube</v-icon> YouTube
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <div>
                  <div class="title">Technologies Used:</div>
                  <ul>
                    <li
                      v-for="(technologies, index) in project.technologies"
                      :key="index"
                    >
                      {{ technologies }}
                    </li>
                  </ul>
                </div>
              </v-col>
            </v-row>
            <v-card-text>
              <div
                v-for="(paragraph, index) in project.description"
                :key="index"
              >
                {{ paragraph }}
              </div>
            </v-card-text>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="indigo darken-1" text @click="$emit('closemodal')"
              >close</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Readmoreproject",
  props: {
    dialog: Boolean,
    project: Object
  }
};
</script>