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

    const [i18n, setI18n] = useState<I18n>(I18nApp.getI18n(langApp))

    const setLanguage = (language: 'Rus' | 'Eng' | 'Tur' ) => {
        setI18n(I18nApp.getI18n(language))
        localStorage.setItem('languageApp', language)
        console.log('3W_language', language)
    }

    return <div>
        {props.children(i18n, 
            setLanguage
            )}
    </div>    
}
export default WithI18n