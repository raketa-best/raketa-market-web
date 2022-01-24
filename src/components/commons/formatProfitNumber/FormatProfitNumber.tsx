import classes from './FormatProfitNumber.module.css'

interface IFormatProfitNumberProps {
    profitNumber: number
    label: string
}

export const formatProfitNumber = (profitNumber: number): string => {
    const formatNumber = (Math.floor(profitNumber * 100) / 100).toFixed(2)
    if (profitNumber > 0) {
        return `+ ${ formatNumber }`
    } else if (profitNumber < 0) {
        return `- ${ formatNumber.toString().slice(1) }`
    } else {
        return `0`
    }    
}

export const colorProfitNumber = (profitNumber: number): string => {
    if (profitNumber > 0) {
        return `#04f398`
    } else if (profitNumber < 0) {
        return `#ff2020`
    } else {
        return `#ffffff`
    }    
}

const FormatProfitNumber: React.FC<IFormatProfitNumberProps> = (props: IFormatProfitNumberProps) => {
    return <div className={classes.profitNumber_block}>
            <div className={classes.profitNumber} style={ {color: `${colorProfitNumber(props.profitNumber)}`} }>
                { `${formatProfitNumber(props.profitNumber)}` }
            </div>
            <div className={classes.label} style={ {color: `${colorProfitNumber(props.profitNumber)}`} }>
                { props.label }
            </div>
        </div> 
}

export default FormatProfitNumber