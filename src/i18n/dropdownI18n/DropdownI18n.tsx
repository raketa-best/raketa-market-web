import classes from './DropdownI18n.module.css'
import { useState } from 'react'
import { I18n } from '../i18n'
import {ReactComponent as IconI18n} from '../../images/icon_i18n.svg'


interface IDropdownI18nProps {
    i18n: I18n
    setLanguage: (language: 'Rus' | 'Eng' | 'Tur') => void
}

const DropdownI18n: React.FC<IDropdownI18nProps> = (props) => {

    const [classDropConteyner, setClassDropConteyner] = useState<string>(classes.dropConteynerNone)
    const [classDropCont, setClassDropCont] = useState<string>(classes.dropdownNone) 
    const [isDropdown, setIsDropdown] = useState(false)

    const dropBtnOnClick = () => {
        if (isDropdown===false) {
            setClassDropConteyner(classes.dropConteyner)
            setClassDropCont(classes.dropdown)
            setIsDropdown(true)
        } else {
            setClassDropConteyner(classes.dropConteynerNone)
            setClassDropCont(classes.dropdownNone)
            setIsDropdown(false)
        }
    }

    const dropConteynerOnClick= () => {
        if (isDropdown===true) {
            setClassDropConteyner(classes.dropConteynerNone)
            setClassDropCont(classes.dropdownNone)
            setIsDropdown(false)
        }
    }

    const languageSelect = (language: 'Rus' | 'Eng' | 'Tur' ) => {
        props.setLanguage(language)
        setClassDropConteyner(classes.dropConteynerNone)
        setClassDropCont(classes.dropdownNone)
        setIsDropdown(false)

        console.log('3Dr_language', language)
    }
        
    const icon = <IconI18n onClick={dropBtnOnClick} 
                                className={classes.iconI18n} />
        
    return <>
        <button className={classes.dropBtn} >
            { icon } 
        </button>
            <div className={classDropCont}>
                <div onClick={() => languageSelect('Eng')} className={classes.lengBtn}>Eng</div>
                <div onClick={() => languageSelect('Rus')} className={classes.lengBtn}>Rus</div>
                <div onClick={() => languageSelect('Tur')} className={classes.lengBtn}>Tur</div>
            </div> 
        <div className={classDropConteyner}
                    onClick={dropConteynerOnClick}/> 
    </>
}
export default DropdownI18n
        