import style from './Emotions.module.css'

interface IEmotionsProps {
    id: number 
    emotions: {
        emotion: string
        count: number
    }[]  
} 

const Emotions: React.FC<IEmotionsProps> = (props: IEmotionsProps) => {
    return <>
    {props.emotions.map((i, index: number) =>    
            <div key={props.id + index} className={style.emotion_count}>
                <div className={style.emotion}>{i.emotion}</div>
                <div className={style.count}>{i.count}</div>
            </div>
        )}
    </>
}
export default Emotions