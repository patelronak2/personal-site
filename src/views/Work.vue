<template>
  <v-container fluid>
    <Pageheading normal="My" coloured="Portfolio" />
    <div class="d-flex justify-center">
      <Blockquote :quote="quote" :quote-author="quoteAuthor" />
    </div>
    <div class="d-flex justify-center">
      <div class="ma-3">
        <v-btn
          rounded
          class="blue lighten-5 ma-1"
          v-on:click="filteredby = 'All'"
          :style="btnStyles('All')"
          >All</v-btn
        >
        <v-btn
          rounded
          class="blue lighten-5 ma-1"
          v-on:click="filteredby = 'Web Application'"
          :style="btnStyles('Web Application')"
          >Web Application</v-btn
        >
        <v-btn
          rounded
          class="blue lighten-5 ma-1"
          v-on:click="filteredby = 'Restful Api'"
          :style="btnStyles('Restful Api')"
          >Restful Api</v-btn
        >
        <v-btn
          rounded
          class="blue lighten-5 ma-1"
          v-on:click="filteredby = 'SPA'"
          :style="btnStyles('SPA')"
          >SPA</v-btn
        >
      </div>
    </div>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1">
        <Projectscontainer
          :fileterd-projects="fileterdProjects"
          v-on:more-info="moreinfo"
        />
      </v-col>
    </v-row>
    <Readmoreproject
      :dialog="moreInfoDialog"
      :project="project"
      v-on:closemodal="moreInfoDialog = !moreInfoDialog"
    />
  </v-container>
</template>
<script>
import Pageheading from "@/components/Pageheading";
import Blockquote from "@/components/Blockquote";
import Projectscontainer from "@/components/Projectscontainer";
import Readmoreproject from "@/components/Readmoreproject";
export default {
  name: "Work",
  components: {
    Pageheading,
    Blockquote,
    Projectscontainer,
    Readmoreproject
  },
  data() {
    return {
      quote:
        "When we strive to become better than we are, everything around us becomes better too.",
      quoteAuthor: "Paulo Coelho",
      work: [
        {
          type: "Web Application",
          id: 0,
          image: require("@/assets/digitalyearbook.png"),
          name: "Digital Yearbook",
          description: [
            "An online portal to keep the keep records and allow interactions who graduated high school with me in 2016. This web-application is the result of two seprate projects (backend api with node and SPA with Vue)."
          ],
          technologies: [
            "Vue, Vuex, Vue-router, Vuetify, Leaflet",
            "Node, Express",
            "MongoDB",
            "Twilio, JWT"
          ],

          links: {
            github: "",
            projectlink: "https://batchof2016.netlify.app/",
            youTube: ""
          }
        },
        {
          type: "Web Application",
          id: 1,
          image: require("@/assets/trackbooks.png"),
          name: "Track Books",
          description: [
            "A social media platform for book lovers to keep track of their reading list. Features include notification system, friend-requests, ratings, reviews, shelfs and more."
          ],
          technologies: [
            "PHP, Laravel",
            "JavaScript, jQuery, BootStrap, HTML5, CSS3",
            "postgreSQL, Laravel ORM",
            "Google Books Api, Mailgun"
          ],

          links: {
            github: "https://github.com/patelronak2/Track-Books",
            projectlink: "http://pacific-lake-84775.herokuapp.com/public/",
            youTube:
              "https://www.youtube.com/watch?v=FwwFlbk_ooU&feature=youtu.be"
          }
        },
        {
          type: "SPA",
          id: 2,
          image: require("@/assets/personalwebsite.png"),
          name: "Personal Website",
          description: [
            "A single page application as a personal site to showcase personal details, portfolio, Resume. Added transitions and animations provides a great UX experience."
          ],
          technologies: ["Vue, Vue-router", "Vuetify, Material Design"],

          links: {
            github: "https://github.com/patelronak2",
            projectlink: "https://ronakjpatel.com"
          }
        },
        {
          type: "Web Application",
          id: 3,
          image: require("@/assets/livemusic.jpg"),
          name: "Live Music Venue Finder",
          description: [
            "An online portal that provides information about all the places in hamilton that have live music."
          ],
          technologies: [
            "HTML5, CSS3, BootStrap",
            "JavaScript, jQuery",
            "Geolocation API, Bing Maps"
          ],

          links: {
            github: "https://github.com/patelronak2/Live-Music-Venue-Finder",
            projectlink: "",
            youTube:
              "https://www.youtube.com/watch?v=pAQu1gWs4Zc&feature=youtu.be"
          }
        },
        {
          type: "Restful Api",
          id: 4,
          image: require("@/assets/hamilton.jpg"),
          name: "Hamilton Data API",
          description: [
            "Contains public sector Data made available under the City of Hamilton’s Open Data Licence.",
            "This api have data for hamilton city about following topic:",
            "1.Waterfalls 2.Campgrounds 3.Bikeways 4.Live Music Venues"
          ],
          technologies: ["PHP, Laravel"],

          links: {
            github: "https://github.com/patelronak2/Rest-api-with-laravel",
            projectlink: "",
            youTube: ""
          }
        },
        {
          type: "Restful Api",
          id: 5,
          image: require("@/assets/nodejs.jpg"),
          name: "Basic API With Node Js",
          description: [
            "1.REST API with NodeJS",
            "2.SQLite database to read, create, modify and delete entries",
            "3.HTTP requests in NodeJS to test a REST API"
          ],
          technologies: ["Node, Express", "SQLite"],
          links: {
            github: "https://github.com/patelronak2/RESTAPI-with-NodeJS",
            projectlink: "",
            youTube: ""
          }
        },
        {
          type: "Web Application",
          id: 6,
          image: require("@/assets/stripe.jpg"),
          name: "Payment Processing with Stripe",
          description: [
            "1.REST API with NodeJS",
            "2.SQLite database to read, create, modify and delete entries",
            "3.HTTP requests in NodeJS to test a REST API"
          ],
          technologies: [
            "HTML5, Mustache, CSS3, BootStrap",
            "Node, Express, Twilio",
            "SQLite"
          ],
          links: {
            github:
              "https://github.com/patelronak2/Payment-Processing-with-Stripe",
            projectlink: "",
            youTube: ""
          }
        }
      ],
      filteredby: "All",
      project: {},
      moreInfoDialog: false
    };
  },
  computed: {
    fileterdProjects() {
      var filteredby = this.filteredby;
      return this.work.filter(function(e) {
        return e.type == filteredby || filteredby == "All";
      });
    }
  },
  methods: {
    isActive(btnValue) {
      return this.filteredby == btnValue;
    },
    btnStyles(btnValue) {
      var temp = {
        border: this.isActive(btnValue) ? "1px solid white!important" : "",
        color: "#1A237E!important",
        "box-shadow": this.isActive(btnValue)
          ? "inset 3px 3px 3px #dadada, inset -3px -3px 3px #fafafa"
          : "3px 3px 3px #dadada, -3px -3px 3px #fafafa",
        transition: "all 0.3s ease"
      };
      return temp;
    },
    moreinfo(id) {
      this.moreInfoDialog = !this.moreInfoDialog;
      let index = this.work
        .map(function(e) {
          return e.id;
        })
        .indexOf(id);
      this.project = this.work[index];
    }
  }
};
</script>
