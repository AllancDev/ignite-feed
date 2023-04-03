import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ', },
      { type: 'link', content: 'devonlane.design', },
    ],

    publishedAt: new Date('2023-03-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/allancdev.png',
      name: 'Allan Camargo',
      role: 'CEO @ Agencia Voraus'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋', },
      { type: 'paragraph', content: '</> 💪🏻 ', },
      { type: 'link', content: 'allan.cdev', },
    ],

    publishedAt: new Date('2023-03-02 20:00:00')
  }
];

export function App() {

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts && (
            posts.map(post => (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          )}
        </main>
     </div>
    </>
  )
}