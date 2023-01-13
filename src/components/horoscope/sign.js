import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

class Sign extends Component {
    constructor(props) {
        super(props);
    }
    
    renderDescription(sign) {
        if (this.props.sign !== null) {
                return (
                    <div key={sign.id}>
                        <p>{sign.description}</p>
                    </div>
                );
        } else {
            return(
                <div></div>
            )            
        }
    }

    render() {  
        return (
                <div className="row align-self-center border-top border-white">
                    <div className="col-12 col-md-3 mt-3 mb-5">
                        <Card style={{ marginLeft: '30px' }}>
                            <CardImg height="180px" top src={process.env.PUBLIC_URL + this.props.sign.image} alt={this.props.sign.name} />
                            <CardBody>
                            <CardText>{this.props.sign.date}</CardText>
                            </CardBody> 
                        </Card>
                    </div>
                    <div className="col-12 col-md-8 mt-3" style={{ textAlign : 'justify' }}>
                            <h4>{this.props.sign.name} Personality</h4>
                            {this.renderDescription(this.props.sign)}
                    </div>
                </div>
        )
    }
}

export default Sign;