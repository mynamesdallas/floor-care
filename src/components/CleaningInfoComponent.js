import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class CleaningInfo extends Component {

    renderFloor(floor) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={floor.image} alt={floor.name} />
                    <CardBody>
                        <CardTitle>{floor.name}</CardTitle>
                        <CardText>{floor.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments) {
        if(comments){
            return(
                
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return(
                            <div>
                                <p>{comment.text}</p>
                            </div>
                        );
                    })}
                </div>
            )
        }
        return(
            <div />
        )
    }

    render() {
        if (this.props.floor) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderFloor(this.props.floor)}
                        {this.renderComments(this.props.floor.comments)}
                    </div>
                </div>
            );
        }
        return <div />
    }
}

export default CleaningInfo;