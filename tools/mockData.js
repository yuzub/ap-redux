const courses = [
  {
    id: 1,
    title: "Design System in Figma",
    slug: "design-dystem-in-figma",
    authorId: 1,
    category: "Design",
  },
  {
    id: 2,
    title: "КУРС C#. Базовый уровень (4 МЕСЯЦА)",
    slug: "c-basic",
    authorId: 2,
    category: "C#",
  },
  {
    id: 3,
    title: "КУРС E-commerce (2 МЕСЯЦА)",
    slug: "e-commerce",
    authorId: 3,
    category: "E-commerce",
  },
  {
    id: 4,
    title: "Project Management (3 МЕСЯЦА)",
    slug: "project-management",
    authorId: 4,
    category: "Project Management",
  },
  {
    id: 5,
    title: "IT Recruiting (2 МЕСЯЦА)",
    slug: "it-recruiting",
    authorId: 5,
    category: "IT Recruiting",
  },
  {
    id: 6,
    title: "PHP для начинающих (2,5 МЕСЯЦА)",
    slug: "php-basic",
    authorId: 6,
    category: "PHP",
  },
];

const authors = [
  { id: 1, name: "Мария Кострова" },
  { id: 2, name: "Павел Баша" },
  { id: 3, name: "Артур Поворин" },
  { id: 4, name: "Юрий Кука" },
  { id: 5, name: "Петришина Татьяна" },
  { id: 6, name: "Владимир Пурик" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
