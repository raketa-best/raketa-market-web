import classes from './StoriesLayout.module.css'
import iconExit from '../images/icon_exit.svg'
import { useContext } from 'react'
import { StoriesContext } from './StoriesProvider'



const StoriesLayout = ({children}: any) => {

    const storiesExit = useContext(StoriesContext)
    
    return <div className={classes.storiesBox}>
        <img onClick={() => storiesExit(null)} className={classes.storiesBox_iconExit} src={iconExit} />
        {children}
    </div>
}

export default StoriesLayout



export const TinkoffTokenStories = () => {
    return <div className={classes.tinkoffTokenStories_block}>
        <div className={classes.tinkoffTokenStories_text}>Я ВОТ ТАКОЙ КРУТОЙ,<br />ТЕСТОВЫЙ СТОРИС 😎</div>
    </div>
}

