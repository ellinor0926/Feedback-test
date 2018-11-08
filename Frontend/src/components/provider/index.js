import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        feedback: [],
        products: [],
        filteredFeedback: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/get-feedback')
            .then(res => res.json())
            .then(feedback => {
                this.setState({
                    feedback: feedback
                })
            });
        fetch('http://localhost:3001/api/get-products')
            .then(res => res.json())
            .then(products => {
                this.setState({
                    products: products
                })
            })

    }

    render() {
        return(
            <MyContext.Provider value={{
                state: this.state,
                filteredFeedback: (list) => {
                    let products = this.state.products;
                    let feedback = this.state.feedback;
                    let feedbackIds = [];
                    let a = [];
            
                    list.map(item => {
                        return products.filter(product => {
                            if(product[item.key] == item.title) {
                               return product.feedback.map(f => feedbackIds.push(f));
                            }
                        })
                        
                    })
            
                    
                    feedbackIds.map(id => {
                        for(let f of feedback) {
                            if(f._id === id) {
                                a.push(f)
                            }
                        }
                        return id;
                    })
                    
                   this.setState({
                       filteredFeedback: a
                   })
                    
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;