import CardPrice from './Components/CardPrice';
import './App.css'
import { useState } from 'react';
function App() {

  const [timeYearly, setTimeYearly] = useState(true)



  const plans = [
    {
      id: 1,
      name: 'Simple', 
      price: 'Free', 
      priceYearly: 'Free',
      description: 'Free plan for all users.',
      characteristics: ['Store up to 20 businesses', '2 collaborators', 'Unlimited colaboration', 'End to end encryption', 'Mac, pc, android, iOS, and Browser'],
      type: 'Get Started Free'
    },
    {
      id: 2,
      name: 'Efficient', 
      price: '$15', 
      cost: 'true',
      priceYearly: '$20', 
      description: 'Ideal for individual creators.',
      characteristics: ['Everything in Simple', '512GB of business storage', 'Unlimited management', 'Unlimited collaborators', 'Link with password protection'],
      type: 'Get Efficient plan'
    },
    {
      id: 3,
      name: 'Team', 
      price: '$25', 
      priceYearly: '$30',
      cost: 'true',
      description: 'Small teams with up to 10 users.',
      characteristics: ['Everything in Efficient', 'Unlimited team members', 'Custom storage plans', 'White label branding'],
      type: 'Get Team plan'
    }
  ];

  
  
  function changeTimePlan() {
    setTimeYearly(state => !state)
  }
  
  return (
    <>
      <div className='container-pricing'>
        <h3 className='container-pricing__h3'>Pricing</h3>
        <div className='container-pricing__div--button'>
          <p className='container-pricing__div--button__p'>Monthly</p>
          <div className={`${timeYearly ? 'container-pricing__div--button__div--box': 'container-pricing__div--button__div--box-false'  }`}>
            <button className='container-pricing__div--button__div--box__button' onClick={changeTimePlan}></button>
          </div>
          <p className='container-pricing__div--button__p'>Yearly</p>
        </div>
        <section className='container-pricing__section'>
          <ul className='container-pricing__section__ul'>
            {plans.map((plan) => (
              <CardPrice 
                key={plan.id} 
                name={plan.name}
                price={plan.price}
                priceYearly={plan.priceYearly}
                description={plan.description}
                characteristics={plan.characteristics}
                type={plan.type}
                cost={plan.cost}
                state={timeYearly}
                plan={plan}
              />
            ))}
          </ul>

        </section>
        
        
      </div>
      
    </>
  )
}

export default App
