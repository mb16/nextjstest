import { InferGetStaticPropsType } from 'next'


type PostProps = {
    title: string
}

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element => {
    return (
        <ul>
            {props.posts.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
        </ul>
    )
}
export default Blog;

export async function getStaticPaths() {
    return {
      paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: false, // can also be true or 'blocking'
    }
  }

// This function gets called at build time
export const getStaticProps = () => {
    // Call an external API endpoint to get posts
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()
    const posts: PostProps[] = [
        {
            'title': "test111"
        }
    ]


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return { props: {posts }};
}