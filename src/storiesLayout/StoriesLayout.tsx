import classes from './StoriesLayout.module.css'
import {ReactComponent as IconExit} from '../images/icon_exit.svg'
import {ReactComponent as IconBack} from '../images/icon_back.svg'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'


const StoriesLayout = ({children}: any) => {

    window.scrollTo( 0, 0 )

    const {setShowStories, setArrayStories, arrayStories} = useContext(StoriesContext)
        
    const onClickExit = () => {
        setShowStories(null)
        setArrayStories([])
    }

    const onClickBack = () => {
        setShowStories(arrayStories[arrayStories.length - 2])
        setArrayStories(arrayStories.slice(0, -1))
    }

    return <div className={classes.storiesBox}>
        { arrayStories.length > 1 &&
            <IconBack onClick={onClickBack} className={classes.iconBack} />
        }
        <IconExit onClick={onClickExit} className={classes.iconExit} />
        {children}
    </div>
         
}

export default StoriesLayout
