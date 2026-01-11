import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const colors = {
  primaryColor: "#060606",
  secondColor: "#1a1a1a",
  thirdColor: "#5b5b5b",
  accentColor: "#fdfdfdfd",
  categoryColor: "#c2d8e9",
};

export const fontSize = {
  xxl: "2.4rem",
  xl: "2.2rem",
  lg: "1.8rem",
  md: "1.4rem",
  base: "1.1rem",
  sm: "1rem",
  xs: "0.9rem",
  xxs: "0.7rem",
};

export const skills = [
  { title: "JavaScript", value: 80, description: "" },
  { title: "Node.js", value: 80, description: "" },
  { title: "React", value: 85, description: "" },
  { title: "Next.js", value: 75, description: "" },
  { title: "PHP", value: 70, description: "" },
  { title: "WordPress", value: 60, description: "" },
  { title: "Mysql", value: 80, description: "" },
  { title: "Three.js", value: 70, description: "" },
];

export const undefinedSkill = [
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
  { title: "Undefined", value: 0, description: "" },
];

export const upgrade = [
  {
    title: "Documentação",
    value: 2,
    icon: "./image/buff/paper.png",
    description: "O projeto ter uma boa documentação ajuda bastante",
  },
  {
    title: "Stack Overflow",
    value: 3,
    icon: "./image/buff/stack-overflow.png",
    description: "Melhor meio de solucionar meus bugs",
  },
  {
    title: "Cooperação",
    value: 2,
    icon: "./image/buff/meeting.png",
    description: "Um time com uma boa comunicação",
  },
  {
    title: "Café",
    value: 3,
    icon: "./image/buff/coffee-cup.png",
    description: "Um belo café para ajudar e pensar melhor",
  },
  {
    title: "Salário",
    value: 5,
    icon: "./image/buff/save-money.png",
    description: "Show me the money!!",
  },
  {
    title: "Tempo",
    value: 5,
    icon: "./image/buff/clock.png",
    description: "",
  },
];

export const downgrade = [
  {
    isDowngrade: true,
    title: "Simples",
    value: 1,
    icon: "./image/buff/neutral.png",
    description: "Falar que é simples de fazer",
  },
  {
    isDowngrade: true,
    title: "Café",
    value: 2,
    icon: "./image/buff/no-coffee.png",
    description: "Não ter café",
  },
  {
    isDowngrade: true,
    title: "Deploy",
    value: 4,
    icon: "./image/buff/rocket.png",
    description: "Fazer deploy numa linda sexta-feira",
  },
  {
    isDowngrade: true,
    title: "Database",
    value: 8,
    icon: "./image/buff/database.png",
    description: "Nada melhor que fazer um delete sem where para acordar",
  },
];

export const disabledUpgrade = [
  {
    title: "Documentação",
    value: 0,
    icon: "./image/buff/paper.png",
    description: "",
  },
  {
    title: "Stack Overflow",
    value: 0,
    icon: "./image/buff/stack-overflow.png",
    description: "",
  },
  {
    title: "Cooperação",
    value: 0,
    icon: "./image/buff/meeting.png",
    description: "",
  },
  {
    title: "Café",
    value: 0,
    icon: "./image/buff/coffee-cup.png",
    description: "",
  },
  {
    title: "Salário",
    value: 0,
    icon: "./image/buff/save-money.png",
    description: "",
  },
  {
    title: "Tempo",
    value: 0,
    icon: "./image/buff/clock.png",
    description: "",
  },
];

export const projectGit = [
  {
    id: 1,
    title: "React Native Habit Tracker",
    description:
      "Aplicativo mobile para acompanhar hábitos diários com interface simples e funcional. Baseado em tutorial e ainda em desenvolvimento.",
    languages: ["React Native", "JavaScript"],
    image: "./image/projetos/rn-habit-tracker.jpg",
    link: "https://github.com/lucastgama/react-native-habit-tracker",
  },
  {
    id: 2,
    title: "React Native Pokédex",
    description:
      "Pokédex mobile construída com React Native e Expo, consumindo a PokéAPI para exibir lista de Pokémon e detalhes dos mesmos.",
    languages: ["React Native", "TypeScript", "Expo"],
    image: "./image/projetos/rn-pokedex.jpg",
    link: "https://github.com/lucastgama/react-native-pokedex",
  },
  {
    id: 3,
    title: "Locafy Platform",
    description:
      "Plataforma web completa inspirada em um tutorial empresarial, com Next.js, Node e infraestrutura AWS (Cognito, RDS, S3).",
    languages: [
      "Next.js",
      "Node.js",
      "AWS",
    ],
    image: "./image/projetos/next-locafy-platform.jpg",
    link: "https://github.com/lucastgama/locafy-platform",
  },
  {
    id: 4,
    title: "Chaotic Game (Unity)",
    description:
      "Jogo desenvolvido em Unity utilizando C#, com mecânicas e lógica de jogo completas (confirme o link verdadeiro para atualização).",
    languages: ["Unity", "C#"],
    image: "./image/projetos/unity-chaotic-game.jpeg",
    link: "https://github.com/lucastgama/chaotic-game",
  },
  {
    id: 5,
    title: "Portfolio Demo",
    description:
      "Protótipo do meu portfolio pessoal para demonstrar minhas habilidades em React e desenvolvimento web responsivo.",
    languages: ["React", "JavaScript", "CSS"],
    image: "./image/projetos/next-portfolio.png",
    link: "https://github.com/lucastgama/portfolio-demo",
  },
];

export const icons = [
  {
    name: "Linkedin",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/lucas-tgama/",
  },
  {
    name: "Github",
    icon: faGithub,
    link: "https://github.com/lucastgama",
  }
];
