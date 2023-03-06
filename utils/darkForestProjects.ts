import { Project } from "../types/interface";


// interface Project {
//     name: String;
//     heading?: String;
//     description: String;
//     whatToDo?: Array<Content>;
//     roadMap?: Content;
//     website?: Content;
//     contract?: Content;
//     twitter?: Content;
//     discord?: Content;
//     opensea?: Content;
//     github?: Content;
//     mintPrice?: Price;
//     image?: String;
//     neededProject?: Project;
//     logo?: String;
//   }

const DFGAIA: Project = {
    name: "DF-GAIA",
    description: "A user-friendly Dark Forest plugin development library.",
    whatToDo: [
      {
        content: "Project Introduction",
        url: "https://github.com/dfarchon/DF-GAIA"
      },
    ],
   

    // github:{
    //     url: "https://github.com/dfarchon/DF-GAIA"
    // },
    image: "/dfgaia.png"
};

const DFARTEMIS: Project ={
  name: "DF-ARTEMIS",
  description: "Planet-targeted bounty mercenary system for Dark Forest.",
    whatToDo: [
      {
        content: "Project Introduction",
        url: "https://github.com/dfarchon/DF-ARTEMIS"
      },
    ],
    image: "/dfartemis.png"

};

const DFAPOLLO: Project ={
  name: "DF-APOLLO",
  description: "Automated assisted operating System for Dark Forest.",
    whatToDo: [
      {
        content: "Demo Video",
        url: "https://www.youtube.com/@dfarchon1759"
      },
    ],
    image: "/dfapollo.png"

};

export {
    DFGAIA,
    DFARTEMIS,
    DFAPOLLO
  };
  