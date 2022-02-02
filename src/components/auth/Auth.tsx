import logo from '../../images/icon_raketa.png'
import classes from './Auth.module.css'


const Auth: React.FC = (props) => {
    return <div className={classes.background}>        
        <div className={classes.imageLogo_block}>
            <img alt='logo Rocket' src={logo} className={classes.imageLogo} />
        </div>        
        <div className={classes.context_block}>
            <div className={classes.context}>Рынок акций - это игра.</div>
            <div className={classes.context}>Игра на деньги 💵</div>
            <div className={classes.context}>Побеждай!</div>
            <div className={classes.context}>Увеличивай свой капитал</div>
            <div className={classes.context}>вместе с</div>
            <div className={classes.context}>RAKETA MARKET</div>
        </div>
        <div className={classes.children_Auth}>
            {props.children}
        </div>        
    </div>
}

export default Auth