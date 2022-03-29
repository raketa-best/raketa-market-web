import AnswerDonations, { IAnswerDonationsProps } from "./AnswerDonations"
import style from '../ProfileBodyBg.module.css'
import classes from './Donations.module.css'
import { useState } from "react"
import AskDonations, { IAskDonationsProps } from "./AskDonations"
import HandleScroll from "../handleScroll/HandleScroll"

const fakeStateDonations = [
    {
        ask: {
            id: 10001, 
            userName: 'Никита блондин Михалковbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccc',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-03-04T21:02:45.678+03:00',
            donationRub: 100055555555555555555555555555555,
            message: 'Я бы хотел задать вопрос следующего характера, почему нельзя баловаться агрегатами, когда в них есть смысл и вообще почему так если не так? rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrn Александр Пушкин родился в обедневшей дворянской семье 6 июня 1799 года. В раннем детстве он был молчаливым и малоподвижным ребенком — старшая сестра Ольга вспоминала, что до шести лет мальчик «был просто увалень». Начальное образование Пушкин получил дома. Воспитание его ничем не отличалось от общепринятой тогда в дворянских семьях системы: родители нанимали ему гувернеров и учителей из Франции, Германии, Англии, России.',
            emotions: [
                {emotion: '❤', count: 1},
                {emotion: '😂', count: 2},
                {emotion: '👍', count: 3}
            ]
        },
        answer: {
            id: 20001, 
            avaUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
            message: 'Да, потому что ты - безумец! Ты вообще понимаешь?.. rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr Александр Пушкин родился в обедневшей дворянской семье 6 июня 1799 года. В раннем детстве он был молчаливым и малоподвижным ребенком — старшая сестра Ольга вспоминала, что до шести лет мальчик «был просто увалень». Начальное образование Пушкин получил дома. Воспитание его ничем не отличалось от общепринятой тогда в дворянских семьях системы: родители нанимали ему гувернеров и учителей из Франции, Германии, Англии, России.',
            dateTime: '2022-03-05T15:23:45.122+03:00',
            emotions: [
                {emotion: '❤', count: 4},
                {emotion: '😂', count: 5},
                {emotion: '👍', count: 6}
            ]
        }    
    },
    {
        ask: {
            id: 3001, 
            userName: 'Городовой Никто Хахаха',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-01-04T21:02:45.678+03:00',
            donationRub: 500,
            message: 'Я бы хотел задать вопрос следующего характера, почему нельзя баловаться агрегатами когда в них есть смысл и вообще почему так если не так..',
            emotions: [
                {emotion: '❤', count: 7},
                {emotion: '😂', count: 8},
                {emotion: '👍', count: 9}
            ]
        },
        answer: undefined
    },
    {
        ask: {
            id: 4001, 
            userName: 'Городовой Никто Хахаха',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-01-04T21:02:45.678+03:00',
            donationRub: 500,
            message: 'Я бы хотел задать вопрос следующего характера, почему нельзя баловаться агрегатами когда в них есть смысл и вообще почему так если не так..',
            emotions: [
                {emotion: '❤', count: 10},
                {emotion: '😂', count: 11},
                {emotion: '👍', count: 12}
            ]
        },
        answer: undefined
    },
    {   ask: {
            id: 10001, 
            userName: 'Никита блондин Михалков',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-03-04T21:02:45.678+03:00',
            donationRub: 1000,
            message: 'Я бы хотел задать вопрос следующего характера, почему нельзя баловаться агрегатами, когда в них есть смысл и вообще почему так если не так?',
            emotions: [
                {emotion: '❤', count: 1},
                {emotion: '😂', count: 2},
                {emotion: '👍', count: 3}
            ]
        },
        answer: {
            id: 6001, 
            avaUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
            message: 'Да, потому что ты - безумец! Ты вообще понимаешь?..',
            dateTime: '2022-03-05T15:23:45.122+03:00',
            emotions: [
                {emotion: '❤', count: 16},
                {emotion: '😂', count: 17},
                {emotion: '👍', count: 18}
            ]
        }
    }             
]

export interface IDonationsProps {
    ask: IAskDonationsProps,
    answer?: IAnswerDonationsProps    
} 
   
const DonationsList: React.FC = () => {

    const [donationsList] = useState<IDonationsProps[]>(fakeStateDonations)    
      
    return <div className={style.block}>
        <HandleScroll className={`${style.block} ${style.block_scroll}`}> 
            <>
                {donationsList && donationsList.map((item, index) =>
                    <div className={classes.donations_block}>
                        {<AskDonations {...item.ask} key={index} />}
                        {item.answer && <AnswerDonations {...item.answer} key={index} />}
                    </div>
                )}
            </>            
        </HandleScroll>
               
    </div>
}

export default DonationsList