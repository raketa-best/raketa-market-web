import classes from './FormatProfitNumber.module.css'

interface IFormatProfitNumberProps {
    profitNumber: number
    label: string
    className?: string
    classNameBlock?: string
}

export const formatProfitNumber = (profitNumber: number, className?: string ): string => {
    const formatNumber = 
      !className 
        ? `${(Math.floor(profitNumber * 100) / 100).toFixed(2)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
        : `${Math.floor(profitNumber)}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    if (profitNumber > 0) {
        return `+ ${ formatNumber }`
    } else if (profitNumber < 0) {
        return `- ${ formatNumber.slice(1) }`
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
                { `${formatProfitNumber(props.profitNumber, props.className)}` }
            </div>
            <div className={`${classes.label} ${profitNumberClassName(props.profitNumber)} ${props.className}` }>
                { props.label }
            </div>
        </div> 
}

export default FormatProfitNumber