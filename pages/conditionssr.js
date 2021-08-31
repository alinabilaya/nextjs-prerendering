import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import CustomLink from "../components/CustomLink";

const renderComponent = ({randomNumber}) => {
    if (randomNumber < 50) {
      return <Button text={"Custom button"} />;
    }
    else {
      return <CustomLink href={'/'} text={"Home link"}/>;
    }
  }

const ConditionSSR = ({randomNumber}) => {
    return (
        <div>
            <MainContainer>
                <h1>Welcome to About page!</h1>
                <p>This is an SSR page, that contains components that will be rendered based on value returned in page props</p>
                <br/>
                <p>It will be either a button or a link</p>
                <div>{renderComponent({randomNumber})}</div>
            </MainContainer>
        </div>
    );
};

export default ConditionSSR;

export async function getServerSideProps({context}) {
    const randomNumber = Math.floor(Math.random() * 100);

    return {
        props: {randomNumber}, // will be passed to the page component as props
    }
}