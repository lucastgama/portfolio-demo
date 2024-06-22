import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faBloggerB
} from "@fortawesome/free-brands-svg-icons";

export const colors = {
  primaryColor: "#050505",
  secondColor: "#1a1a1a",
  thirdColor: "#5b5b5b",
  accentColor: "#fdfdfdfd",
  categoryColor: "#c2d8e9",
};

export const fontSize = {
  xxl: "3rem",
  xl: "2.5rem",
  lg: "2rem",
  md: "1.6rem",
  base: "1.2rem",
  sm: "1rem",
  xs: "0.75rem",
  xxs: "0.5rem",
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
    title: "Portfolio",
    description: "Meu portfolio, um projeto para demonstrar minha habilidade",
    languages: ["React", "Three.js"],
    image: "./image/projetos/portfolio.jpg",
    link: "https://github.com/lucastgama/portfolio",
  },
  {
    title: "Candy Crush",
    description:
      "Uma forma de melhorar meu conhecimento em React com um jogo que eu gosto",
    languages: ["React"],
    image: "./image/projetos/candy.png",
    link: "https://github.com/lucastgama/candy-crush",
  },
  {
    title: "React 3D",
    description: "Primeiro projeto para conhecer e melhorar o Three.js",
    languages: ["React", "Three.js"],
    image: "./image/projetos/react3d.jpg",
    link: "https://github.com/lucastgama/react3D",
  },
  {
    title: "Jogo da memoria",
    description: "Jogo para melhorar meus conhecimentos em HTML e JS",
    languages: ["HTML", "CSS", "JavaScript"],
    image: "./image/projetos/memory.png",
    link: "https://github.com/lucastgama/memory-game",
  },
  {
    title: "PokeNext",
    description:
      "Projeto baseado no curso do professor Matheus Battisti do canal Hora de Codar",
    languages: ["React", "Next"],
    image: "./image/projetos/pokenext.jpg",
    link: "https://github.com/lucastgama/pokenext",
  },
  {
    title: "Pedra, papel e tesoura",
    description: "Jogo de pedra, papel e tesoura",
    languages: ["HTML", "CSS", "JavaScript"],
    image: "./image/projetos/rock-paper-scissors.jpg",
    link: "https://github.com/lucastgama/portfolio",
  },
];

export const icons = [
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/lucas.t.gama/",
  },
  {
    name: "Linkedin",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/lucas-tgama/",
  },
  {
    name: "Github",
    icon: faGithub,
    link: "https://github.com/lucastgama",
  },
  {
    name: "Blog",
    icon: faBloggerB,
    link: "https://github.com/lucastgama",
  },
];
