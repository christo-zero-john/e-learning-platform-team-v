firestore = {
  appData: {
    adminId: "",
  },

  students: [
    {
      username: "",
      displayName: "",
      mail: "",
      password: "",
      enrolledCourses: ["", "", ""],
      joined: [DD, MM, YYYY],
    },
  ],

  courses: [
    {
      name: "",
      id: "",
      description: "",
      curriculum: "",
      enrollingsCount: 0,
      createdOn: [DD, MM, YYYY],
      lastUpdated: [DD, MM, YYYY],
      duration: [HH, MM],
      tiers: [
        {
          name: "",
          features: [
            "some feature",
            "some feature",
            "some feature",
            "some feature",
          ],
          cost: 0,
        },
      ],
    },
  ],

  curriculum: [
    {
      id: "",
      modules: [
        {
          name: "",
          topics: ["topic id", "topic id", "topic id"],
        },
      ],
      topics: [
        {
          id: "",
          title: "",
          duration: [HH, MM],
          type: "url",
          url: "",
        },
      ],
    },
  ],
};
