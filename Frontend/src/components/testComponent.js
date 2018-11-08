import React, { Component } from 'react';
import Dropdown from './filter/dropdown';
// import { updateFilters, filterFeedback, filterProducts } from '../logic/filterLogic';

class Tester extends Component {

    state = {
        department: [
			{
				id: 0,
				name: 'kläder'
			},
			{
				id: 1,
				name: 'electronik'
			}
		],
		category: [
			{
				id: 10,
				departmentId: 0,
				name: 'tröjor'
			},
			{
				id: 20,
				departmentId: 0,
				name: 'byxor'
			}
		],
		products: [
			{
				id: 100,
				categoryId: 10,
				departmentId: 0,
				name: 'blue',
				artNr: 1000
			},
			{
				id: 101,
				categoryId: 10,
				departmentId: 0,
				name: 'red',
				artNr: 1001
			}
		],
        filters: {
            departmentIds: [],
            categoryIds : [],
            productIds: []
        
        },
        filteredProducts: [],
        feedback: [
            {
                id: 1111,
                comment: 'Bra'
            },
            {
                id: 2222,
                comment: 'Sådär'
            },
            {
                id: 9999,
                comment: 'Dålig'
            }
        ]
    }

    filterProducts = () => {
        const filters = this.state.filters;
        
        this.state.products.forEach(product => {
            if(filters.departmentIds.includes(product.departmentId) || filters.departmentIds.length === 0) {
                if(filters.categoryIds.includes(product.categoryId) || filters.categoryIds.length === 0) {
                    if(filters.productIds.includes(product.productIds) || filters.productIds.length === 0) {
                        console.log(product)
                        
                    }
                }
            }
        })

        // this.props.list.forEach(function (product) {
        //     if (filter.departmentIds.Contais(product.departmentId))
        //        if (filter.categoryIds.Contains(product.categoryId) || filter.categoryIds.Count == 0)
        //          if (filter.productIds.Contains(prodict.productId) || filter.productIds.Count ==0)
        //          filteredProducts.push(product);
                  
        //   );
    }

    //Toggles seleted filters
    toggleSelected = (object) => {
        if('categoryId' in object) {
            this.state.filters.productIds = [...this.state.filters.productIds, object.id]
        } else if('departmentId' in object) {
            this.state.filters.categoryIds = [...this.state.filters.categoryIds, object.id]
        } else {
            this.state.filters.departmentIds = [...this.state.filters.departmentIds, object.id]
        }

        this.filterProducts();

        console.log(this.state)
        // let temp = this.state.filters;
        // temp[object.id].selected = !temp[object.id].selected;

        // updateFilters(object);
        // filterProducts(this.state.products);

        // this.setState({
        //     filters: temp,
        // });

    };



    render() {
        return(
            <div>
                <Dropdown
                        titleHelper='Department'
                        title='Department'
                        list={this.state.department}
                        toggleItem={this.toggleSelected}
                    />
                    <Dropdown
                        titleHelper='Category'
                        title='Category'
                        list={this.state.category}
                        toggleItem={this.toggleSelected}
                    />
                     <Dropdown
                        titleHelper='Product'
                        title='Product'
                        list={this.state.products}
                        toggleItem={this.toggleSelected}
                    />
            </div>
        )
    }
}

export default Tester;