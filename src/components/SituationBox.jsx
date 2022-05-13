import React, {Component} from 'react'

class SituationBox extends Component {
    render() {
        return (
            <div className="SituationBox">      
             {this.props.situation}
            </div>
        )
    }
}

export default SituationBox