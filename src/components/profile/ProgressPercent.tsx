import classes from './ProgressPercent.module.css'


export interface IProgressPercentProps {
    progressPercent: number
    amount: number
    unit: string
}

const shorterAmount = (amount: number, unit: string) => {

    if (unit === 'LEVEL') {
        return `${ (amount) }`
    } else {
        if (amount > 1000 && amount < 1000000) {
            return `${ (Math.floor(amount / 10) / 100).toFixed(2) }k`        
        } else if (amount > 1000000) {
            return `${ (Math.floor(amount / 10000) / 100).toFixed(2) }🍋`
        } else {
            return `${ (amount).toFixed(2) }`
        }
    }
}    

const ProgressPercent: React.FC<IProgressPercentProps> = (props: IProgressPercentProps) => {

    return <div className={classes.progress_container}>
        <div className={classes.expProgressPercent}>
            {`${props.progressPercent}%`}
        </div> 
        <div className={classes.expProgressPercent_container}>
            <div style={ {width: `${props.progressPercent}%`} } className={classes.expProgressPercent_progress}>                
            </div> 
            <div className={classes.unit}>
                {`${props.unit} ${shorterAmount(props.amount, props.unit)}`}
            </div>                           
        </div>                   
    </div>
}

export default ProgressPercent
