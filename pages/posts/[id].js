import {useRouter} from "next/router";
import styles from '../../styles/post.module.css'
import MainContainer from "../../components/MainContainer";

export default function Post({post}) {
    const {query} = useRouter()
    return (
        <MainContainer>
            <div className={styles.post}>
                <h1>Post id {query.id}</h1>
                <p className="post-title">Title - {post.title}</p>
                <br/>
                <div className="post-body">Body - {post.body}</div>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const post = await response.json()
    return {
        props: {post}, // will be passed to the page component as props
    }
}