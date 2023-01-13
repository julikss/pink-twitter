import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import Sign from './sign'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSign: null
        }
    }

    onSignSelect(sign) {
        this.setState({ selectedSign: sign });
    }

    renderSign(sign) {
        if (sign !== null) {
            return(
                <Sign sign={sign} /> 
            );
        } else {
            return(
                <div></div>
            )            
        }
    }

    render() {
        const list = this.props.signs.map((sign) => {
            return (
                <div className="col-12 col-md-2 mb-3">
                    <Card key={sign.id} style={{cursor: "pointer"}}
                        onClick={() => this.onSignSelect(sign)}>
                        <CardImg height="130px" src={process.env.PUBLIC_URL + sign.image} alt={sign.name} />
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row justify-content-center">
                        {list}
                </div>            
                <div className="row">
                    <div className="col-12 col-md-12">
                        {this.renderSign(this.state.selectedSign)}
                    </div>
                </div>
            </div>
                
        );
    }
}

export default List;