interface Info {
  name: string;
  emailId: string;
}

interface Social {
  linkedInUrl: string;
  gitHubUrl: string;
  instagramUrl: string;
}

interface AboutMePage {
  para1: string;
  para2: string;
  para3: string;
  skills: string[];
}

interface UserData {
  info: Info;
  social: Social;
  aboutMePage: AboutMePage;
}
