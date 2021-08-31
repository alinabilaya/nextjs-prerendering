import Button from "../components/Button";
import MainContainer from "../components/MainContainer";
import CustomLink from "../components/CustomLink";
import { useState, useEffect } from 'react'

function renderComponent (showButton) {
    if (showButton) {
      return <Button text={"Custom button"} />;
    }
    else {
      return <CustomLink href={'/'} text={"Home link"} />;
    }
  }

const ErrorOnRendering = () => {
    // This page is an example of how to avoid warning when server rendering result is not the same as one on client during hydration.
    // Q: But can I just check if window is available? A: Well, it depends, but don’t do this!
    // Note that this approach will make your components slower because they have to render twice, so use it with caution.
    // Also you can use suppressHydrationWarning prop on the element.
    const [showButton, setshowButton] = useState(false)
    useEffect(() => setshowButton(process.browser), [])
    console.log("component is rendered")

    return (
        <div>
            <MainContainer>
                <h1>Welcome to ErrorOnRendering page!</h1>
                <p>This page contains error on re-rendering due to different rendering results for html and nextJs</p>
                <div>{renderComponent(showButton)}</div>
            </MainContainer>
        </div>
    );
};

export default ErrorOnRendering;