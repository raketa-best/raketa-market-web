export const numberShorter = (number: number): string => {
    
    if (number > 1000 && number < 1000000) {
        return `${ (Math.floor(number / 10) / 100).toFixed(2) }k`        
    } else if (number > 1000000) {
        return `${ (Math.floor(number / 10000) / 100).toFixed(2) }🍋`
    } else {
        return `${ (Math.floor(number * 100) / 100).toFixed(2) }`
    }
} 

export const numberCategorize = (number: number): string => {
    
    return `${ Math.floor(number) }`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
} 


