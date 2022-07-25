import { Header } from "./header"
import { Footer } from "./footer"

export interface SharedLayoutInterface {
    children: JSX.Element
}

export const SharedLayout = (props: SharedLayoutInterface) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}