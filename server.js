const express = require("express");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;
const User = db.user;
const Institution = db.institution;
//db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Database with { force: true }");
  initial();
});

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});*/

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/role.routes")(app);
require("./app/routes/institution.routes")(app);

require("./app/routes/module.routes")(app);
require("./app/routes/topic.routes")(app);
require("./app/routes/content.routes")(app);

require("./app/routes/listen.routes")(app);
require("./app/routes/speak.routes")(app);
require("./app/routes/read.routes")(app);
require("./app/routes/write.routes")(app);

app.use("/", express.static(path.join(__dirname, "dashboard/dist")));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Only for Testing or initial release
function initial() {
  Role.create({
    name: "SuperAdmin",
  });

  Role.create({
    name: "Sales",
  });

  Role.create({
    name: "ContentCreator",
  });

  Role.create({
    name: "Student",
  });

  Role.create({
    name: "InstitutionAdmin",
  });

  Role.create({
    name: "DepartmentAdmin",
  });

  Institution.create({
    name: "Owner",
    address: "",
    pincode: "560068",
    contact_phone: "",
    contact_email: "owner@company.com",
    permissions_list: "",
    city: "Bangalore",
    state: "Karnataka",
    isActive: true,
    type: 1,
  })
    .then((institution) => {
      console.log("Institution successfully created ... ");
      // Create SuperAdmin User By default

      User.create({
        name: "Super Admin",
        profile_pic: "",
        preference_id: 1,
        institutionId: 1,
        phone: "",
        isActive: 1,
        email: "demoSuperAdmin@test.com",
        password: bcrypt.hashSync("demo", 8),
        institutionId: 1,
      })
        .then((user) => {
          user.setRoles([1]).then(() => {
            console.log("User registered successfully!");
          });
        })
        .catch((error) => {
          console.log("Error inserting to DB " + error);
        });
    })
    .catch((error) => {
      console.log("Error inserting to DB " + error);
    });

  console.log("Create Modules .... ");
  /*
  var Introduction = {
    video_url: "",
    content: [
      {
        data: "Welcome to Module 1 - Communicate with Confidence.  This module takes us in to three topics -",
        list: [
          { data: "Smart tips to fluent English" },
          { data: "Introduce yourself with confidence" },
          { data: "Meetings and Greetings in Communication" },
        ],
      },
      { data: "Can I really speak fluent English?" },
      {
        data: "Many learners ask this question, and the answer would be the same each time, that is yes. You can definitely speak fluent English.",
      },
      { data: "The question is, how will you and by when?" },
      {
        data: "This depends on your motivation and commitment, as well as your flexibility and willingness to learn.",
      },
      {
        data: "How you speak is a very personal issue. And changing it may make you uncomfortable for a while, as you may feel that changing your speech is changing YOU.",
      },
      { data: "How long does it take?" },
      {
        data: "Generally speaking, you will start to see a change after about two - three days, definitely by two - three months.",
      },
      {
        data: "Sorry, if you were hoping to hear ten minutes! You can speak fluent ENGLISH, but it won't happen overnight.",
      },
      {
        data: "People often expect instant results and give up too soon. You can speak very good English if you are willing to put some effort into it.",
      },
      {
        data: "There are no easy ways to learn a language. Language study requires hard work, and most of all diligence. Work on it each day and you will see amazing results.",
      },
    ],
  };

  Module.create({
    title: "Module 1 Title",
    subtitle: "Module 1 Subtitle",
    status: 1,
    industry_type: 2,
    language: 3,
    introduction: JSON.stringify(Introduction),
  });

  Introduction.video_url = "";
  Introduction.content = [
    "<p>Welcome to Module 2. We have now understood the importance of confidence in communication. Let us break it down further in this module and study,</p><ul><li>Verbal communication</li><li>Story of English and English vs other languages- Sentence syntax</li><li>Words as different parts of speech</li></ul><p></p><p>Any language has three basic ingredients or components</p><ul><li>Grammar</li><li>Vocabulary</li><li>Tone</li></ul>",
    "<ul><li>Grammatically correct language facilitates understandings both in spoken and written language. It speaks of important subjects such as, parts of speech, articles, tenses and subject verb agreement.</li><li><li>An extensive vocabulary assists better expression, both in spoken and written language. Daily vocabulary exercises include learning new words every day, and using them to articulate better.</li><li>Tone or the vocal aspect of language speaks of, just not what you say but how you say it.</li><li>For a linguist a TONE is the quality of sound.</li><li>But in general terms Tone, is an attitude toward a subject or an audience.</li><li>Tone is generally conveyed through the choice of words, intonation or the viewpoint of the speaker on a particular subject.</li><li>To understand this better, let is study these three topics in</li></li></ul>",
  ];
  Module.create({
    title: "Module 2 Title",
    subtitle: "Module 2 Subtitle",
    status: 1,
    industry_type: 2,
    language: 3,
    introduction: "Module 2 introduction",
  });

  Topic.create({
    title: "Topic1 Title",
    subtitle: "Topic1 Subtitle",
    status: 1,
  }).then((topic) => {
    console.log("Inserted " + topic.id);

    Module.findOne({ where: { id: 1 } }).then((module) => {
      module.setTopics([topic]);
    });
  });

  Topic.create({
    title: "Topic2 Title",
    subtitle: "Topic2 Subtitle",
    status: 1,
  }).then((topic) => {
    console.log("Inserted " + topic.id);
    Module.findOne({ where: { id: 1 } }).then((module) => {
      module.setTopics([topic]);
    });
  });
  */
}
