import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';

import './styles/global.css';


function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/lourenso-sofecia.png",
        name: "Lourenço Sofécia",
        role: "Frontend Developer",
      },
      content: [
        {
          type: "paragraph",
          content: "Fala Galeraaa"
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projecto no meu portifa.É um projecto que fiz no NLW Return. evento da Rockeatseat. O nome do projeto é DoctorCare"
        },
        {
          type: "link",
          content: "sofecia.design/doctorcare"
        },
      ],
      publishedAt: new Date("2023-04-12 15:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/sofecia.png",
        name: "LS Dev gamer",
        role: "Frontend Developer XMore",
      },
      content: [
        {
          type: "paragraph",
          content: "e aí Pessoal"
        },
        {
          type: "paragraph",
          content: "Acabei de subir mais um projecto no meu de React Native"
        },
        {
          type: "link",
          content: "onisan.design/tools"
        },
      ],
      publishedAt: new Date("2023-04-14 16:00:00"),
    },

  ]
 
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post, index) =>{
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
      
    </div>
  )
}

export default App;
