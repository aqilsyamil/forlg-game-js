import React, {Component} from 'react'

class Card extends Component {
    render() {
        return (
            <div class="card" style={{width: "18rem"}}>
             <img class="card-img-top" src={this.props.imgSrc} alt="Card"/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.description}</h5>
                 </div>
            </div>
        )
    }
}

export default Card