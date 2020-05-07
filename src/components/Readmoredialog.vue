<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogData.title }}</span>
        </v-card-title>
        <v-card-text>
          <div class="subtitle-2 indigo--text text--darken-4">
            {{ dialogData.toFrom }}
          </div>
          <v-container>
            <ul>
              <li
                v-for="(duty, index) in dialogData.duties"
                :key="`duty-${index}`"
              >
                {{ duty }}
              </li>
            </ul>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="indigo darken-1" text @click="$emit('closemodal')"
            >close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Readmoredialog",
  props: {
    dialogData: Object,
    dialog: Boolean
  }
};
</script>
