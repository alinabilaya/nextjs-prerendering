import MainContainer from "../components/MainContainer";
import CustomLink from "../components/CustomLink";

const Index = () => {
    return (
        <MainContainer>
            <h1>Welcome to NextJs pre-rendering project!</h1>
            <br/>
            <div className="link-to-ssg-page">
                Find interesting news here -&gt;
                <CustomLink href={'/posts'} text={"Posts"}/>
            </div>
        </MainContainer>
    );
};

export default Index;