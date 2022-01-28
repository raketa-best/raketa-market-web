import classes from './StoriesLayout.module.css'
import {ReactComponent as IconExit} from '../images/icon_exit.svg'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'



const StoriesLayout = ({children}: any) => {

    const storiesExit = useContext(StoriesContext)
    
    return <div className={classes.storiesBox}>
        <IconExit onClick={() => storiesExit(null)} className={classes.storiesBox_iconExit} />
        {children}
    </div>
}

export default StoriesLayout


// test children:

export const TinkoffTokenStories = () => {
    return <div className={classes.tinkoffTokenStories_block}>
        <div className={classes.tinkoffTokenStories_text}>Я ВОТ ТАКОЙ КРУТОЙ,<br />ТЕСТОВЫЙ СТОРИС 😎</div>
    </div>
}

