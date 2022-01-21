import NavBar from "./navBar/NavBar"

export interface ILayoutProps { 

    component: React.ReactElement<any>
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    return <>
        <div>
            {props.component} 
        </div>                   
        <div>
            <NavBar />
        </div>
    </>        
}

export default Layout