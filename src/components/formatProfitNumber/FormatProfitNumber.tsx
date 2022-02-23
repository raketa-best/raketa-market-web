import classes from './FormatProfitNumber.module.css'

interface IFormatProfitNumberProps {
    profitNumber: number
    label: string
    className?: string
    classNameBlock?: string
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

export const profitNumberClassName = (profitNumber: number): string => {
    if (profitNumber > 0) {
        return classes.positive
    } else if (profitNumber < 0) {
        return classes.negative
    } else {
        return classes.zero
    }    
}

const FormatProfitNumber: React.FC<IFormatProfitNumberProps> = (props: IFormatProfitNumberProps) => {
    return <div className={`${classes.profitNumber_block} ${props.classNameBlock}`}>
            <div className={`${classes.profitNumber} ${profitNumberClassName(props.profitNumber)} ${props.className}` }>
                { `${formatProfitNumber(props.profitNumber)}` }
            </div>
            <div className={`${classes.label} ${profitNumberClassName(props.profitNumber)} ${props.className}` }>
                { props.label }
            </div>
        </div> 
}

export default FormatProfitNumber