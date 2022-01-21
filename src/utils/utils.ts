export const shorterAmount = (amount: number): string => {
    
    if (amount > 1000 && amount < 1000000) {
        return `${ (Math.floor(amount / 10) / 100).toFixed(2) }k`        
    } else if (amount > 1000000) {
        return `${ (Math.floor(amount / 10000) / 100).toFixed(2) }🍋`
    } else {
        return `${ (amount).toFixed(2) }`
    }
} 