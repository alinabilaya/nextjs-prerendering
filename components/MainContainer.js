import Head from "next/head";
import CustomLink from "./CustomLink";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ssr, nextjs" + keywords}></meta>
                <title>NextJs pre-rendering</title>
            </Head>
            <div className="navbar">
                <CustomLink href={'/'} text={"Home"}/>
                <CustomLink href={'/conditionssr'} text={"conditionSSR"}/>
                <CustomLink href={'/erroronrendering'} text={"ErrorOnRendering"}/>
                <CustomLink href={'/about'} text={"About"}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .navbar {
                        background: darkorchid;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    );
};

export default MainContainer;