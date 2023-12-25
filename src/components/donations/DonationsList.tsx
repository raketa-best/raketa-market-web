import AnswerDonations, { IAnswerDonationsProps } from "./AnswerDonations"
import classes from './Donations.module.css'
import { useState } from "react"
import AskDonations, { IAskDonationsProps } from "./AskDonations"


const fakeStateDonations = [
    {
        ask: {
            id: 10001, 
            userName: 'Nikita blond bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccc',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-03-04T21:02:45.678+03:00',
            donationRub: 100055555555555555555555555555555,
            message: 'I would like to ask the following question, why can not you dabble in aggregates when they make sense and in general why so if not so?  In early childhood, he was a silent and sedentary child - his older sister Olga recalled that up to six years of age the boy was just a respecter. Primary education Pushkin received at home. His upbringing did not differ from the then common system in noble families: parents hired him governesses and teachers from France, Germany, England, Russia.',
            emotions: [
                {emotion: '❤', count: 1},
                {emotion: '😂', count: 2},
                {emotion: '👍', count: 3}
            ]
        },
        answer: {
            id: 20001, 
            avaUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
            message: 'Yes, because you are insane! Do you even realize...?  rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr Alexander was born into an impoverished noble family on June 6, 1799.In early childhood, he was a silent and sedentary child - his older sister Olga recalled that up to six years of age the boy was just a respecter. Primary education Pushkin received at home. His upbringing did not differ from the then common system in noble families: parents hired him governesses and teachers from France, Germany, England, Russia.',
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
            userName: 'Urban Hahaha',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-01-04T21:02:45.678+03:00',
            donationRub: 500,
            message: 'I would like to ask a question of the following nature, why you can not dabble in aggregates when they make sense and in general why so if not so....',
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
            userName: 'Gamer',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-01-04T21:02:45.678+03:00',
            donationRub: 500,
            message: 'I would like to ask a question of the following nature, why you can not dabble in aggregates when they make sense and in general why so if not so....',
            emotions: [
                {emotion: '❤', count: 10},
                {emotion: '😂', count: 11},
                {emotion: '👍', count: 12}
            ]
        },
        answer: undefined
    },
    {   ask: {
            id: 50001, 
            userName: 'Nikita blond',
            avaUrl: 'https://user-images.githubusercontent.com/13190019/157927932-91e5ff0d-142e-4bf9-bdc6-91dd17b8da43.png',
            dateTime: '2022-03-04T21:02:45.678+03:00',
            donationRub: 1000,
            message: 'I would like to ask a question of the following nature, why you can not dabble in aggregates when they make sense and in general why so if not so....',
            emotions: [
                {emotion: '❤', count: 1},
                {emotion: '😂', count: 2},
                {emotion: '👍', count: 3}
            ]
        },
        answer: {
            id: 6001, 
            avaUrl: 'https://user-images.githubusercontent.com/13190019/149777356-c3952ae1-bb28-4d8a-990b-5833993b1c10.png',
            message: 'Yes, because you are insane! Do you even realize...?',
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
          
    return <>
        {donationsList && donationsList.map((item) =>
            <div className={classes.donations_block} >
                {<AskDonations {...item.ask} key={item.ask.id} />}
                {item.answer && <AnswerDonations {...item.answer} key={item.answer.id} />}
            </div>
        )}
    </> 
}

export default DonationsList