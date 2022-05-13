import React, {Component} from 'react'
import SituationBox from './SituationBox'
import Card from './Card'

const levels = {
    level_1: {
        situation: "Your mother asks you to bring some food for dinner in the forest",
        card_1: {
            imgSrc: "./images/berries.jpg", 
            description: "You eat berries"
        },

        card_2: {
            imgSrc: "./images/mushroom.jpg", 
            description: "You eat mushrooms"
        }
    }
    
}

class Level extends Component {
    render() {
        return (
            <div className="Level">
                <SituationBox situation={levels.level_1.situation}></SituationBox>
                 <div className="d-flex flex-row"> 
                    <Card imgSrc={levels.level_1.card_1.imgSrc} description={levels.level_1.card_1.description}></Card>
                    <Card imgSrc={levels.level_1.card_2.imgSrc} description={levels.level_1.card_2.description}></Card>
                </div>
            </div>
        )
    }
}

export default Level