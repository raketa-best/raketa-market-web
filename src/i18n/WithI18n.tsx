import { ReactNode, useState } from "react"
import I18nApp, { I18n } from "./i18n"

const WithI18n  = (props: {
    children: (
            i18n: I18n,
            setLanguage: (language: 'Rus' | 'Eng' | 'Tur') => void
    ) => ReactNode
        
}) => {    

    const langLocalStorage = localStorage.getItem('languageApp') as 'Rus' | 'Eng' | 'Tur' | null
    const langApp = langLocalStorage || 'Eng'

    console.log('1W_langApp', langApp)

    const [i18n, setI18n] = useState<I18n>(I18nApp.getI18n(langApp))

    console.log('2W_i18n', i18n)

    const setLanguage = (language: 'Rus' | 'Eng' | 'Tur' ) => {
        setI18n(I18nApp.getI18n(language))
        localStorage.setItem('languageApp', language)
        console.log('3W_language', language)
    }

    console.log('2W_i18n', i18n)

    return <div>
        {props.children(i18n, 
            setLanguage
            )}
    </div>    
}
export default WithI18n