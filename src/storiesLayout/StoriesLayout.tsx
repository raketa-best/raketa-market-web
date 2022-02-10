import classes from './StoriesLayout.module.css'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'
import { IconBackLink, IconExitLink } from '../components/commons/iconLink/IconLink'


const StoriesLayout = ({children}: any) => {

    window.scrollTo( 0, 0 )

    const {exit, back, arrayStories} = useContext(StoriesContext)       
    
    return <div className={classes.storiesBox}>
        { arrayStories.length > 1 &&
            <IconBackLink onClick={back}/>
        }
        <IconExitLink onClick={exit}/>
        {children}
    </div>
         
}

export default StoriesLayout
