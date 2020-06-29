<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="10" offset-sm="1">
        <Pageheading normal="My" coloured="Resume" />
        <v-row class="my-6">
          <v-col cols="12" md="6">
            <Underlined heading-text="Experience" />
            <Experienceandprojectcontainer
              :items="experiences"
              v-on:read-more="readmore"
            />
          </v-col>
          <v-col cols="12" md="6">
            <Underlined heading-text="Projects" />
            <Experienceandprojectcontainer
              :items="projects"
              v-on:read-more="readmore"
            />
          </v-col>
        </v-row>
        <pageheading normal="My" coloured="Skills" />
        <v-row no-gutters class="my-6">
          <v-col cols="12" md="4">
            <Skillscomponent
              :technologies="frontendTechnologies"
              title="Client Side Technologies"
            />
          </v-col>
          <v-col cols="12" md="4"
            ><Skillscomponent
              :technologies="backendTechnologies"
              title="Server Side Technologies"
            />
          </v-col>
          <v-col cols="12" md="4"
            ><Skillscomponent
              :technologies="databaseTechnologies"
              title="Database Technologies"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <Readmoredialog
      :dialog-data="dialogData"
      :dialog="dialog"
      v-on:closemodal="dialog = !dialog"
    />
  </v-container>
</template>
<script>
import Pageheading from "@/components/Pageheading";
import Underlined from "@/components/Underlined";
import Experienceandprojectcontainer from "@/components/Experienceandprojectcontainer";
import Readmoredialog from "@/components/Readmoredialog";
import Skillscomponent from "@/components/Skillscomponent";

export default {
  name: "Resume",
  components: {
    Pageheading,
    Underlined,
    Experienceandprojectcontainer,
    Readmoredialog,
    Skillscomponent
  },
  data() {
    return {
      dialog: false,
      dialogData: {},
      experiences: [
        {
          type: "experience",
          title: "Web Developer, Mohawk College",
          toFrom: "October 2019 - April 2020",
          details:
            "Working under the supervision of Kevin Browne at Mohawk College has prepared me to conduct my own research and adhere to great discipline while working remotely.",
          duties: [
            "Refactored a PHP based web-application to MVC architecture. This has resulted in increased development speed and made parallel development possible.",
            "Developed app integration with APIs for payment processors and Google Analytics",
            "Managed, optimized and updated PHP databases to track the user’s responses and resuming a session",
            "Successfully created and integrated a staff portal giving the web-application a multi-tier architecture "
          ],
          id: 1,
          borderColor: "#FF6D00"
        },
        {
          type: "experience",
          title: "Developer and Facilitator, IEC Hamilton",
          toFrom: "January 2018 - August 2018",
          details:
            "My work experience at Industry Education Council of Hamilton has helped me in developing my soft skills, adjusting into office environment and importance of being team-player.",
          id: 2,
          duties: [
            "Developed a web-based interactive tool for HCC students to explore the top 12 local careers in tech",
            "Successfully used WordPress to redesign the company’s website, changed website’s platform and managed/updated databases. Increased site customization by installing Key plugins",
            "Facilitated the delivery of Hamilton Code Clubs (HCC) to more than 10 elementary schools. Developed small modules on ‘Scratch’ to demonstrate working examples using basic programming concepts"
          ],
          borderColor: "#00BFA5"
        },
        {
          type: "experience",
          title: "Tutor, Codify Zone",
          toFrom: "May 2018 - August 2018",
          details:
            "Provided academic assistance for students through Codify Zone Summer Camp Program. Becoming a tutor helped me in gaining valuable interpersonal, communication, and listening skills.",
          id: 3,
          duties: [
            "Educated students in basic programming concepts using online resources",
            "Encouraged students to come up with exciting ideas for their projects and helped them finishing it",
            "Helped students discovering preferred learning styles by observing their approach to new projects"
          ],
          borderColor: "#AEEA00"
        }
      ],
      projects: [
        {
          type: "project",
          title: "Digital Yearbook",
          toFrom: "May 2020 - June 2020",
          details:
            "Created this project as a favor to my highschool buddies. I created two seprate project (backend api and front-end SPA) and inegrated them to make an online portal named 'Digital Yearbook'.",
          id: 0,
          duties: [
            "An online portal to keep the keep records and allow interactions who graduated high school with me in 2016",
            "challenges included maintaining state and protecting routes"
          ],
          borderColor: "#FF6D00"
        },
        {
          type: "project",
          title: "Track-Books",
          toFrom: "November 2019",
          details:
            "Developed this application as a part of my capstone project. It provided a perfect opportunity for me to bring my love for books into programming world!",
          id: 2,
          duties: [
            "A project to help people who love to keep track of the books they have read and want to share it with the world",
            "Learned Mobile development and backend technologies including Laravel, PostgreSQL",
            "Challenges included security and implementing notification features"
          ],
          borderColor: "#00BFA5"
        },
        {
          type: "project",
          title: "Payment Processing with Stripe",
          toFrom: "October 2019",
          details:
            "Created this project as a part of academic requirements. This project boosted my interest in api integration which helped me in succeeding at my workplace",
          id: 1,
          duties: [
            "A subscription app using Stripe that allows customer to create/manage subscriptions, and an administrator to manage subscriptions of all customer.",
            "This project exposed me to technologies like Express, Twilio, Mustache, Stripe Elements"
          ],
          borderColor: "#FF6D00"
        }
      ],
      frontendTechnologies: [
        { name: "Vue, Vuex, Vuetify, Vue Router" },
        { name: "React, Redux, React Router" },
        { name: "HTML5, CSS3, Bootstrap" },
        { name: "JavaScript, jQuery, JSON" },
        { name: "Websockets" }
      ],
      backendTechnologies: [
        { name: "PHP, Laravel, CodeIgniter" },
        { name: "Node, Express" },
        { name: "C#, .NET" },
        { name: "Java, Python" },
        { name: "Creating Restful Api" }
      ],
      databaseTechnologies: [
        { name: "MySQL, PostgreSQL, SQLite" },
        { name: "Oracle PL/SQL" },
        { name: "Redis" },
        { name: "Mongodb, Mongo Atlas" }
      ]
    };
  },
  methods: {
    readmore(id, type) {
      this.dialog = !this.dialog;
      let index = -1;
      if (type == "project") {
        index = this.projects
          .map(function(e) {
            return e.id;
          })
          .indexOf(id);
        this.dialogData = this.projects[index];
      } else {
        index = this.experiences
          .map(function(e) {
            return e.id;
          })
          .indexOf(id);
        this.dialogData = this.experiences[index];
      }
    }
  }
};
</script>
