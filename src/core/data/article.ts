import { Article } from '@src/core/model';
import {
  profile2,
  profile3,
  profile4,
  profile5,
} from './profile';
import { comments } from './comment';
import {
  imageArticle1Bg,
  imageArticle3Bg,
  imageArticle2Bg,
  imageArticle4Bg,
  homeImg1,
  homeImg2,
  homeImg3,
  homeImg4,
} from '@src/assets/images';

/* tslint:disable */

export const articles: Article[] = [
  {
    image: homeImg1,
    title: 'How To Learn To Paint',
    description: 'The easiest way to make sure your inter meal nibbling stays on track is to have...',
    content: 'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile2,
    date: 'Today 12:35 pm',
    tips: 10,
    comments: comments,
    likes: 320,
  },
  {
    image: homeImg2,
    title: 'Why Is The Workout Important?',
    description: 'The easiest way to make sure your inter meal nibbling stays',
    content: 'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile3,
    date: 'Today 12:35 pm',
    tips: 10,
    comments: [],
    likes: 320,
  },
  {
    image: homeImg3,
    title: 'Partners For Progress Together',
    description: 'This one has to do more with habit than anything. You create the expectation...',
    content: 'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile4,
    date: 'Today 11:10 am',
    tips: 5,
    comments: [comments[0], comments[1]],
    likes: 245,
  },
  {
    image: homeImg4,
    title: 'Oil Painting & Sketch',
    description: 'This one has to do more with habit than anything. You create the expectation...',
    content: 'There\'s a lot of advice out there on how to eat healthy, and if we\'re being honest, it can sometimes feel like too much to think about. Especially when you\'re hungry. Remember when you were a kid and eating was as simple as open, chew, enjoy? Yes, those were simpler times. Now, knowing how to eat healthy doesn\'t seem quite as straightforward. Between the diet fads, gourmet trends, and a rotating roster of superfoods, eating well has gotten, well, complicated.',
    author: profile5,
    date: 'Today 11:10 am',
    tips: 5,
    comments: [comments[1], comments[2]],
    likes: 125,
  },
];
