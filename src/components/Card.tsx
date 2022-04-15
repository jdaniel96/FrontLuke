import CardStyle from './Card.module.css'

const Card = function(){
    return(
        <div className={CardStyle.Card}>

            <picture className={CardStyle.Image}>
            <img className={CardStyle.NftImage} src="https://nftnewspro.com/wp-content/uploads/2021/12/Prime-Ape-NFT-collection-was-sold-in-38-minutes-.jpg" alt="not found"/>
            </picture>

            <section className={CardStyle.TextContainer}>
                <div className={CardStyle.UserName}>User</div>
                <div className={CardStyle.UserMedia}>@media</div>

                <div className={CardStyle.Text3}>890</div>
                <div className={CardStyle.Text4}>341</div>
                <div className={CardStyle.Text5}>983</div>

                <div className={CardStyle.Text6}>Sold</div>
                <div className={CardStyle.Text7}>Bought</div>
                <div className={CardStyle.Text8}>Following</div>

            </section>           
        </div>
    )
}

export default Card;