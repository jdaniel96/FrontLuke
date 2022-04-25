import ButtonsStyles from './Buttons.module.css'

const Buttons = function(){
    return(
        <div className={ButtonsStyles.container}>
        <button className={ButtonsStyles.buttonOne}>Go to store</button>
        <button className={ButtonsStyles.buttonTwo}>Become a creator</button>
        </div>

    )
}

export default Buttons;