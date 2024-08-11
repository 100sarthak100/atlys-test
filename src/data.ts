export interface IPost {
  id: number;
  isEdited: boolean;
  createdAt: string;
  createdBy: string;
  profileImg: string;
  contentImg: string;
  numOfComments: number;
  content: string;
}

export interface DashboardData {
  title: string;
  desc: string;
  posts: IPost[];
}

export const dashboardData: DashboardData = {
  title: "Hello Jane",
  desc: "How are you doing today? Would you like to share something with the community 🤗",
  posts: [
    {
      id: 1,
      isEdited: false,
      createdAt: "5mins ago",
      createdBy: "Theresa Webb",
      profileImg: "user.png",
      contentImg: "emoji.png",
      numOfComments: 24,
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      isEdited: true,
      createdAt: "8mins ago",
      createdBy: "Marvin McKinney",
      profileImg: "user.png",
      contentImg: "emoji.png",
      numOfComments: 24,
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      isEdited: true,
      createdAt: "8mins ago",
      createdBy: "Marvin McKinney",
      profileImg: "user.png",
      contentImg: "emoji.png",
      numOfComments: 24,
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      isEdited: true,
      createdAt: "8mins ago",
      createdBy: "Marvin McKinney",
      profileImg: "user.png",
      contentImg: "emoji.png",
      numOfComments: 24,
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ],
};

export interface AuthField {
  name: string;
  label: string;
  type: "text" | "password" | "email";
  placeholder: string;
  icon?: string;
}

export interface FooterLink {
  text: string;
  action: "login" | "signup";
}

export interface AuthConfig {
  title: string;
  subtitle: string;
  fields: AuthField[];
  footerText: string;
  footerLink: FooterLink;
  buttonText: string;
}

export const authConfig: Record<string, AuthConfig> = {
  login: {
    title: "WELCOME BACK",
    subtitle: "Log into your account",
    fields: [
      {
        name: "username",
        label: "Email or Username",
        type: "text",
        placeholder: "Enter your email or username",
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        icon: "eye.svg",
      },
    ],
    footerText: "Not registered yet?",
    footerLink: {
      text: "Register →",
      action: "signup",
    },
    buttonText: "Login now",
  },
  signup: {
    title: "SIGN UP",
    subtitle: "Create an account to continue",
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
      },
      {
        name: "username",
        label: "Username",
        type: "text",
        placeholder: "Choose a preferred username",
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Choose a strong password",
        icon: "eye.svg",
      },
    ],
    footerText: "Already have an account?",
    footerLink: {
      text: "Login →",
      action: "login",
    },
    buttonText: "Continue",
  },
};
