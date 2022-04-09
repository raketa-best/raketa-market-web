import React, { useEffect, useRef, useState } from "react"
import UserHeader, { IUserHeaderProps } from "../userHeaderProfile/UserHeader"
import MenuProfile from "../menuProfile/MenuProfile"
import style from './Profile.module.css'
import classes from '../ProfileBodyBg.module.css'
import HandleScroll from "../handleScroll/HandleScroll"
import ConnectTinkoffTokenAlert from "../connectTinkoffTokenAlert/ConnectTinkoffTokenAlert"
import HandleFixedPos from "../handleFixedPos/HandleFixedPos"
import useResizeObserver from '@react-hook/resize-observer'

export interface IProfileProps { 
    component: React.FC
}

const Profile:React.FC<IProfileProps> = (props: IProfileProps) => {

    const fakeStateUserHeader = {   
        bgImageUrl: 'https://user-images.githubusercontent.com/13190019/149777282-217df2ba-9355-496f-9339-67cbde15e509.png',
        avatarUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
        nick: 'НЕВЕРОЯТНЫЙ - RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
        statusMessage: 'Я есть тот, кто я есть, и это моя судьба yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
        expProgressPercent: 1900,
        amountRub: 8234700000000000,
        level: 770
    }    
    
    const [userHeader] = useState<IUserHeaderProps>(fakeStateUserHeader)
    const [userHeaderHeight, setUserHeaderHeight] = useState<number>(0)
    

    const userHeaderRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if (userHeaderRef.current) {
            setUserHeaderHeight(userHeaderRef.current.clientHeight)
        }  
    }, [userHeaderRef])
    

    useResizeObserver(userHeaderRef, (entry) => {
        setUserHeaderHeight(entry.contentRect.height)
    })

                      
    return <div className={style.profile}>
        <HandleFixedPos classNameFixedPos={style.profile} userHeaderHeight={userHeaderHeight}>
            <>
                <UserHeader {...userHeader} userHeaderRef={userHeaderRef}/>                
                <MenuProfile />
                {props.component !== ConnectTinkoffTokenAlert 
                    ? <div className={classes.block}>
                        <HandleScroll classNameScroll={classes.block} userHeaderHeight={userHeaderHeight}>
                            <props.component /> 
                        </HandleScroll>
                    </div>
                    : <props.component />
                }
            </>
        </HandleFixedPos>
    </div>
}

export default Profile



