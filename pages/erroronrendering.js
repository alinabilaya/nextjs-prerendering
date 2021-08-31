import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import CustomLink from "../components/CustomLink";

const renderComponent = () => {
    if (process.browser) {
      return <Button text={"Custom button"} />;
    }
    else {
      return <CustomLink href={'/'} text={"Home link"}/>;
    }
  }

const ErrorOnRendering = () => {
    return (
        <div>
            <MainContainer>
                <h1>Welcome to ErrorOnRendering page!</h1>
                <p>This page contains error on re-rendering due to different rendering results for html and nextJs</p>
                <div>{renderComponent()}</div>
            </MainContainer>
        </div>
    );
};

export default ErrorOnRendering;