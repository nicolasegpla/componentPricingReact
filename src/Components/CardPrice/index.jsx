import iconCheck from '../../assets/iconCheck.svg'
import './style.css'

// eslint-disable-next-line react/prop-types, no-unused-vars
function CardPrice({name, price, characteristics, type, description, priceYearly, state, cost}) {

   
    return(
        <>
                <div className='card-container'>
                    <span className='card-container__span'>{name}</span>
                    <div className='card-container__div'>
                        <section className='sec'>
                            <span className='card-container__div__span'>{!state ? priceYearly : price}</span>
                        </section>
                        
                        {
                            cost ? <p className='card-container__div__p'>{state ? '/yearly' : '/month'}</p> : <p></p>
                        }
                        
                    </div>
                    <p className='card-container__p-description'>{description}</p>
                    <ul className='card-container__ul'>
                        {
                            // eslint-disable-next-line react/prop-types
                            characteristics.map((characteristic) => (
                                <li className='card-container__ul__li' key={characteristic}> <img src={iconCheck} alt="" /> {characteristic}</li>
                            ))
                        }
                    </ul>
                    <button className='card-container__button'>{type}</button>
                </div>
        </>
    )   
}

export default CardPrice