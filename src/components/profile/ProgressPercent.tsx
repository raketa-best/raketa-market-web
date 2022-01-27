import classes from './ProgressPercent.module.css'


export interface IProgressPercentProps {
    progressPercent: number
    label: string
}
 

const ProgressPercent: React.FC<IProgressPercentProps> = (props: IProgressPercentProps) => {

    return <div className={classes.progress_container}>
        <div className={classes.expProgressPercent}>
            {`${props.progressPercent} %`}
        </div> 
        <div className={classes.expProgressPercent_container}>
            <div style={ {width: `${props.progressPercent}%`} } className={classes.expProgressPercent_progress}>                
            </div> 
            <div className={classes.unit}>
                {props.label}
            </div>                           
        </div>                   
    </div>
}

export default ProgressPercent
