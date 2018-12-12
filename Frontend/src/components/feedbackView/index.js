import React, {Component} from 'react';
import Filter from '../filter';
import './feedbackView.css';
import FeedbackPreviewList from '../feedbackPreviewList';
import DetailedFeedback from '../detailedFeedback';

class FeedbackView extends Component {
    state = {
        filterIsDirty: false,
        filteredFeedback: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/get-feedback')
            .then(response => response.json())
            .then(feedback => {
                this.setState({
                    feedback: feedback.reverse()
                })
            });
    }

    handleFilteredFeedback = (queries) => {
        fetch('http://localhost:3001/api/filter-feedback', {
            method: 'POST',
            body: JSON.stringify(queries),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(feedback => {
                this.setState({
                    filterIsDirty: true,
                    filteredFeedback: feedback.reverse()
                })
            });
    }

    handleSelectedFeedback = (id) => {
        let selectedFeedback = this
            .state
            .feedback
            .find(f => f._id === id);
        this.setState({selectedFeedback: selectedFeedback})
    }

    render() {
        return (

            <div className='mainGrid'>
                <div className='listContainers'>
                    <Filter filterFeedback={this.handleFilteredFeedback}/> 
                    
                    {this.state.feedback && 
                    <FeedbackPreviewList
                        active={this.state.filterIsDirty}
                        filtered={this.state.filteredFeedback}
                        feedback={this.state.feedback}
                        returnId={this.handleSelectedFeedback}
                        selectedId={this.state.selectedFeedback
                        ? this.state.selectedFeedback._id
                        : null}/>
}
                </div>
                {this.state.selectedFeedback && <DetailedFeedback feedback={this.state.selectedFeedback}/>
}
            </div>

        )
    }
}

export default FeedbackView;