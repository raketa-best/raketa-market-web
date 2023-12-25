import { I18n } from '../../i18n/i18n'
import logo from '../../images/icon_raketa.png'
import classes from './Auth.module.css'


const Auth: React.FC<{i18n: I18n}> = (props) => {
    const t = props.i18n
    return <div className={classes.background}>        
        <div className={classes.imageLogo_block}>
            <img alt='logo Rocket' src={logo} className={classes.imageLogo} />
        </div>        
        <div className={classes.context_block}>
            <div className={classes.context}>{t['Рынок акций - это игра.']}</div>
            <div className={classes.context}>{t['Игра на деньги 💵']}</div>
            <div className={classes.context}>{t['Побеждай!']}</div>
            <div className={classes.context}>{t['Увеличивай свой капитал']}</div>
            <div className={classes.context}>{t['вместе с']}</div>
            <div className={classes.context}>RAKETA MARKET</div>
        </div>
        <div className={classes.children_Auth}>
            {props.children}
        </div>        
    </div>
}

export default Auth