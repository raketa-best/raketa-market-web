import { I18n } from '../../i18n/i18n'
import NavBar from '../navBar/NavBar'
import classes from './Layout.module.css'


const Layout: React.FC<{i18n: I18n}> = (props) => {

    return <div className={classes.layout_block}>
        <div className={classes.layout}>            
            {props.children}
            <div className={classes.nav_bar}>                    
                <NavBar i18n={props.i18n} />
            </div> 
        </div>
    </div> 
}

export default Layout