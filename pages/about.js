import MainContainer from "../components/MainContainer";

const About = ({post}) => {
    return (
        <MainContainer>
            <h1>Welcome to About page!</h1>
            <p>This is an SSR page, that contains request to external API to return just</p>
            <div>post id - {post.id}</div>
        </MainContainer>
    );
};

export default About;

export async function getServerSideProps({context}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    const post = await response.json()
    return {
        props: {post}, // will be passed to the page component as props
    }
}