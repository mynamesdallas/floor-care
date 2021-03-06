import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CleaningInfo from './CleaningInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFloor: null
        };
    }

    onFloorSelect(floor) {
        this.setState({selectedFloor: floor});
    }

    render() {
        const directory = this.props.floors.map(floor => {
            return (
                <div key={floor.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onFloorSelect(floor)}>
                        <CardImg width="100%" src={floor.image} alt={floor.name} />
                        <CardImgOverlay>
                            <CardTitle>{floor.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CleaningInfo floor={this.state.selectedFloor} />
            </div>
        );
    }
}

export default Directory;