import MainContainer from "../components/MainContainer";
import Link from "next/link";

const Posts = ({posts}) => {
    return (
        <MainContainer>
            <h1>Find out what is new in the world</h1>
            <ul>
                {posts.slice(0, 5).map(post =>
                    <div>
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                <a>{post.title}</a>
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
        </MainContainer>
    );
};

export default Posts;

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await response.json()

    return {
        props: {posts}, // will be passed to the page component as props
    }
}