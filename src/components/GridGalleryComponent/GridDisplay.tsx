import GridDisplayStyles from './GridDisplay.module.css';




const GridDisplay = function(){
    return(
        <div className={GridDisplayStyles.Gallery}>
            <img alt="Not Found" src="https://www.arweave.net/bKYhkjezWhJw-z2QzeSgYM_H_5OxY2RBTO1052LMoBs?ext=png" className={GridDisplayStyles.Card1}/>
            <img alt="Not Found" src="https://www.arweave.net/ZRkJZK8eyH0oXDGehKw0CLeKKOfKBYPpdh_TxGHQAoU?ext=png"  className={GridDisplayStyles.Card2}/>
            <img alt="Not Found" src="https://fiverrpromotion.com/wp-content/uploads/2022/02/Untitled-design-7.jpg"  className={GridDisplayStyles.SmallCard1}/>
            <img alt="Not Found" src="https://uploads-ssl.webflow.com/610a424cc641051ce0a5b293/614dd26f9519db3e87496bc1_h2.jpg"  className={GridDisplayStyles.SmallCard2}/> 
        </div>
    )

}

export default GridDisplay