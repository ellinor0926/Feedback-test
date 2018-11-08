const filters = {
    departmentIds: [],
    categoryIds : [],
    productIds: []

}

export const updateFilters = (filterObject) => {

    console.log(filterObject);
    // const key = Object.keys(filters).find(filter => filter === filterObject.key);

    // if (filters[key].includes(filterObject.title)) {
    //     filters[key] = filters[key].filter(f => f !== filterObject.title)
    // } else {
    //     filters[key].push(filterObject.title)
    // }

}




const filterHfbName = (products) => {
    // return filters.hfbName.map(name => {
    //     products.filter(product => {
    //         return product.hfbName === name;
    //     })
    //     return name;
    // })
   
}

const filterItemNumber = (products) => {
    return filters.itemNumber.map(number => {
        products.filter(product => {
            return product.itemNumber === number;
        })
        return number;
    })
}

export const filterProducts = (products) => {    
    // Här vill jag kunna hitta de produkter som har de values som även finns i filter här ovan 
    // typ return products där product.kläder === något element i filters.kläder
    // OCH product.artikelNr === något element i filters.artikelNr
    
}

//for every key in product (of products) check if it contains any of the elements from the coresponding filter-array


export const filterFeedback = (products, feedback) => {
    // Här vill jag sen kunna hitta feedbacken som finns i de produkter jag fick från filterProducts
    let productFilters = [...filterHfbName(products), ...filterItemNumber(products)]
    products.map(product => {
        for(let key in product) {
            if(productFilters.includes(product[key]))
            console.log(product)
        }
    })  
}

// filteredFeedback = (list) => {
//     let products = this.props.products;
//     let feedback = this.state.feedback;
//     let feedbackIds = [];
//     let a = [];

//     list.map(item => {
//         return products.filter(product => {
//             if(product[item.key] == item.title) {
//                return product.feedback.map(f => {
//                 if (feedbackIds.includes(f) === false) {
//                     feedbackIds.push(f);
//                 } 
//                });
//             }
//         })

//     })        
//         feedbackIds.map(id => {
//         for(let f of feedback) {
//             if(f._id === id) {
//                 a.push(f);
//             }
//         }
//         return id;
//     })

//    this.setState({
//        filteredFeedback: a.reverse()
//    })

// };