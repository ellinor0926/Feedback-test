import React, { Component } from 'react';
import Filter from '../filter';
import './feedbackView.css';


class FeedbackView extends Component {
    state = {
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/get-products')
            .then(response => response.json())
            .then(products => {
                this.setState({
                    products: products
                })
            });
    }

    render() {

        return(
            <div className='mainGrid'>
              {this.state.products && <Filter products={this.state.products}/>}      
            </div>
        )
    }
}

export default FeedbackView;