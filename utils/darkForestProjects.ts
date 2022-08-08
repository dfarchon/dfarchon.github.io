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
    description: "A user-friendly dark forest plugin development library.",
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


export {
    DFGAIA
  };
  