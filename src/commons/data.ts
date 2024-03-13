import {v1} from "uuid";
import {PostType, WorksType} from "./types";

export const posts: PostType[] = [
  {
    id: v1(),
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    keywords: 'Design, Pattern',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: v1(),
    title: 'Creating pixel perfect icons in Figma',
    date: '12 Feb 2020',
    keywords: 'Figma, Icon Design',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: v1(),
    title: 'UI Interactions of the week',
    date: '12 Feb 2019',
    keywords: 'Express, Handlebars',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
  {
    id: v1(),
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    keywords: 'Design, Pattern',
    subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  },
]


export const works: WorksType[] = [
  {
    id: v1(),
    title: 'Designing Dashboards',
    date: 2020,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    src: '/assets/images/app.png',
    keyword: 'Dashboard'
  },
  {
    id: v1(),
    title: 'Vibrant Portraits of 2020',
    date: 2018,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    src: '/assets/images/picture.png',
    keyword: 'Illustration'
  },
  {
    id: v1(),
    title: '36 Days of Malayalam type',
    date: 2018,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    src: '/assets/images/label.png',
    keyword: 'Dashboard'
  },
  {
    id: v1(),
    title: 'Components',
    date: 2018,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    src: '/assets/images/calendar.jpeg',
    keyword: 'Components, Design'
  },
  {
    id: v1(),
    title: 'Designing Landing pages',
    date: 2020,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    src: '/assets/images/book.jpeg',
    keyword: 'Website'
  }
]