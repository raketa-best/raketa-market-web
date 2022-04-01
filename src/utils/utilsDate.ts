export const dateTimeLocale = (dateTime: string): string => {

    return new Date(dateTime).toLocaleString()
}

