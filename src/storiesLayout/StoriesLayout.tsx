import classes from './StoriesLayout.module.css'
import {ReactComponent as IconExit} from '../images/icon_exit.svg'
import {ReactComponent as IconBack} from '../images/icon_back.svg'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'


const StoriesLayout = ({children}: any) => {

    window.scrollTo( 0, 0 )

    const {exit, back, arrayStories} = useContext(StoriesContext)       
    
    return <div className={classes.storiesBox}>
        { arrayStories.length > 1 &&
            <IconBack onClick={back} className={classes.iconBack} />
        }
        <IconExit onClick={exit} className={classes.iconExit} />
        {children}
    </div>
         
}

export default StoriesLayout
