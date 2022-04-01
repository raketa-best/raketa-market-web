import NavBar from '../navBar/NavBar'
import classes from './Layout.module.css'

export interface ILayoutProps { 
    component: React.ReactElement<any>
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {

    return <div className={classes.layout_block}>
        <div className={classes.layout}>            
            {props.component}
            <div className={classes.nav_bar}>                    
                <NavBar />
            </div> 
        </div>
    </div> 
}

export default Layout