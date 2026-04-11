import { Blog } from '@/types';

export const blogs: Blog[] = [
    {
        title: 'Learn GraphQL',
        excerpt: 'An introduction to GraphQL and how it differs from REST APIs.',
        date: '2026-03-15',
        readTime: 'infinite',
        link:'https://graphql.org/learn/',
        slug: 'learn-graphql',
      },
      {
        title: 'Job and Queues in Web Development',
        excerpt: 'A practical guide to using background jobs and queues in web applications.',
        date: '2026-03-10',
        readTime: 'infinite',
        slug: 'job-and-queues-in-web-development',
        link:'https://medium.com/swlh/background-job-and-queue-practical-application-use-cases-8cd1cc83afdf'
      },
      {
        title: 'An introduction to AI in Node.js',
        excerpt: 'Leverage AI in your Node.js applications using TensorFlow.js',
        date: '2026-03-05',
        readTime: 'infinite',
        slug: 'an-introduction-to-ai-in-nodejs',
        link:'https://developer.ibm.com/tutorials/an-introduction-to-ai-in-nodejs/'
      }
  ];