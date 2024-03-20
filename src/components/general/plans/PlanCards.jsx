import React from 'react'
import Card from '../../layout/Card'
import FlexContainer from '../../layout/FlexContainer'
import { plans } from '../../../utils/plans';

const PlanCards = () => {
    return (
        <div className='app-container'>
            <FlexContainer>
                {
                    plans.map((plan) => {
                        return <Card title={plan.title} description={plan.description} isDiscount={plan.isDiscount} price={plan.price} isRecommended={plan.isRecommended} features={plan.features} key={plan.title}></Card>
                    })
                }
            </FlexContainer>
        </div>
    )
}

export default PlanCards