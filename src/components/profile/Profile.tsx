import { useState } from "react"
import UserHeader, { IUserHeaderProps } from "../userHeaderProfile/UserHeader"
import MenuProfile from "../menuProfile/MenuProfile"

const Profile:React.FC = () => {

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
          
    return <>
        <UserHeader {...userHeader} />                
        <MenuProfile />
    </> 
}

export default Profile