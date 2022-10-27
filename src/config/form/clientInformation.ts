export const formInputRows = [
  {
    id: 1,
    type: "text",
    inputName: "name",
    placeholder: "Vasile Alexandri",
    title: "Name",
    description: "Enter your name",
    validationSchema: {
      required: "Name field is required!",
    },
  },
  {
    id: 2,
    type: "tel",
    inputName: "phone",
    placeholder: "+373(_______)",
    title: "Phone",
    description: "Enter your phone",
    validationSchema: {
      required: "Phone field is required!",
      pattern: {
        value:
          /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g,
        message: "Please enter a valid phone!",
      },
    },
  },

  {
    id: 3,
    type: "email",
    inputName: "email",
    placeholder: "client@power-beauty.md",
    title: "E-mail",
    description: "Enter your email",
    validationSchema: {
      required: "Email field is required!",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email!",
      },
    },
  },
];
