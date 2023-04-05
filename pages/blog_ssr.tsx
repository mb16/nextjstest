import { InferGetStaticPropsType } from 'next'


type PostProps = {
    title: string
}

const BlogSSR = (props: InferGetStaticPropsType<typeof getServerSideProps>): JSX.Element => {
    return (
        <ul>
            {props.posts.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}
export default BlogSSR;

export const getServerSideProps = () => {
    // Call an external API endpoint to get posts
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()
    const posts: PostProps[] = [
        {
            'title': "test222"
        }
    ]


    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return { props: {posts }};
}