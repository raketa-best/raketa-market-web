import React, { useEffect, useRef, useState } from "react"
import UserHeader, { IUserHeaderProps } from "../userHeaderProfile/UserHeader"
import MenuProfile from "../menuProfile/MenuProfile"
import style from './Profile.module.css'
import classes from '../ProfileBodyBg.module.css'
import HandleScroll from "../handleScroll/HandleScroll"
import HandleFixedPos from "../handleFixedPos/HandleFixedPos"
import useResizeObserver from '@react-hook/resize-observer'
import { I18n } from "../../i18n/i18n"


const Profile:React.FC<{i18n: I18n}> = (props) => {
    
    const fakeStateUserHeader = {   
        bgImageUrl: 'https://user-images.githubusercontent.com/13190019/149777282-217df2ba-9355-496f-9339-67cbde15e509.png',
        avatarUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
        nick: 'UNBELIEVABLE - RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
        statusMessage: 'I am who I am and this is my destiny uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu',
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
                      
    return <>
        <div className={style.profile}>
            <HandleFixedPos classNameFixedPos={style.profile} userHeaderHeight={userHeaderHeight}>
                <>
                    <UserHeader {...userHeader} userHeaderRef={userHeaderRef} i18n={props.i18n}/>                
                    <MenuProfile i18n={props.i18n}/> 
                    <div className={classes.block}>
                        <HandleScroll classNameScroll={classes.block} userHeaderHeight={userHeaderHeight}>
                        <> {props.children} </>
                        </HandleScroll>
                    </div>
                </>
            </HandleFixedPos>
        </div>
    </>
}

export default Profile



