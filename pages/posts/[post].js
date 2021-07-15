import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import BlogPost from '../../components/BlogPost'

export default function Post() {
  const router = useRouter()
  const blogPosts = [
    {
      id: 'a',
      title: 'Foobar',
      heading: 'klops experience',
      body: 'Super nicer Text',
      timestamp: new Date(),
      author: 'klops',
    },
    {
      id: 'b',
      title: 'Barfoo',
      heading: "bonnie's experience",
      body: 'Super nicer Text',
      timestamp: new Date(),
      author: 'klops',
    },
  ]
  /*blogPosts[post].heading
  let heading = ''
  for (let i = 0; i < blogPosts.length; i++) {
    if (blogPosts[i].id === router.query.post) {
      heading = blogPosts[i].heading
      break
    }
  }
  */
  const post = blogPosts.filter((post) => post.id === router.query.post)[0]

  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <BlogPost post={post} />
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}
