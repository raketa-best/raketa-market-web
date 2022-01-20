import { useEffect, useState } from "react"
import classes from './ProgressPercent.module.css'


export interface IProgressPercentProps {
    progressPercent: number
    amount: number
    unit: string
}

const ProgressPercent: React.FC<IProgressPercentProps> = (props: IProgressPercentProps) => {

    const [amountAdapted, setAamountAdapted] = useState<string>('')

    useEffect(() => {
        if (props.amount > 1000 && props.amount < 1000000) {
            setAamountAdapted(`${Math.floor(props.amount / 1000)}k`)
        } else if (props.amount > 1000000) {
            setAamountAdapted(`${Math.floor(props.amount / 1000000)}🍋`)
        } else {
            setAamountAdapted(`${props.amount}`)
        }
    }, [])

    return <div className={classes.progress_container}>
        <div className={classes.expProgressPercent}>
            {`${props.progressPercent}%`}
        </div> 
        <div className={classes.expProgressPercent_container}>
            <div style={ {width: `${props.progressPercent}%`} } className={classes.expProgressPercent_progress}>                
            </div> 
            <div className={classes.unit}>
                {`${props.unit} ${amountAdapted}`}
            </div>                           
        </div>                   
    </div>
}

export default ProgressPercent
