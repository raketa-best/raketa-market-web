import HandleScroll from '../handleScroll/HandleScroll'
import NavBar from '../navBar/NavBar'
import classes from './Layout.module.css'

export interface ILayoutProps { 
    component: React.ReactElement<any>
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {

    return <div className={classes.layout_block}>
        <div className={classes.layout}>
            <HandleScroll className={`${classes.layout} ${classes.layout_fixed_pos}`}>
                {props.component}
            </HandleScroll>
            <div className={classes.nav_bar}>                    
                <NavBar />
            </div> 
        </div>
    </div> 
}

export default Layout