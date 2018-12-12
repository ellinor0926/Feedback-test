import React, {Component, Fragment as F} from 'react';
import Dropdown from "./dropdown";
import ActiveFilters from './activeFilters';

import './filter.css';

class Filter extends Component {

    state = {
        filters: [],
        favoriteFilters: [],
        activeFilters: []
    };

    componentDidMount() {        
        fetch('http://localhost:3001/api/get-filters')
            .then(res => res.json())
            .then(filters => {
                let something = filters.map(filter => {
                    filter.selected = false;
                    return filter;
                })

                this.setState({filters: something})
            })

    }

    // These handles the fetched arrays and format them for the dropdowns
    itemNumberFilter = (array) => {
        let newId = this.state.filters.length - 1;
        const itemNumbers = array.map(item => {
            newId++;
            return {
                id: newId,
                title: item.itemNumber + '',
                selected: false,
                key: 'itemNumber'
            }
        });

        return this.setState(prevState => ({
            filters: [
                ...prevState.filters,
                ...itemNumbers
            ]
        }))

    };

    //Updates state with active filters
    handleActiveFilters = () => {
        let active = this.state.filters.filter(item => item.selected);
            
        this.filterFeedback(active);

        this.setState({activeFilters: active})
    };

    //Toggles seleted filters
    toggleSelected = (id) => {
        let temp = this.state.filters;
        temp[id].selected = !temp[id].selected;

        this.handleActiveFilters();

        this.setState({filters: temp});

    };

    //This returns what list to render
    dropdownList = (key) => {
        return this.state.filters.filter(item => {
                return item.key === key;
            }) 
            
    };

    //This adds a new favorite filter
    // Todo - check if a identical favorite filter already exists, so we dont get
    // unnecessary copies
    addFavoriteFilters = () => {
        let filters = this.state.filters;
        let newFaves = this.state.favoriteFilters;
        let id = this.state.favoriteFilters.length;

        let newFavorite = filters.reduce((acc, elem) => {
            if (elem.selected) {
                acc.title += elem.title + ', ';
                acc
                    .ids
                    .push(elem.id);
                return acc;
            } else {
                return acc
            }

        }, {
            title: '',
            ids: [],
            selected: false,
            id: id,
            key: 'favoriteFilters'
        });

        newFaves.push(newFavorite);
        this.setState({favoriteFilters: newFaves});
    };

    // Makes sure the "Save filters" button is disabled if there are no active
    // filters
    validateNewFavorite = () => {
        return this
            .state
            .filters
            .find(item => {
                return item.selected
            });
    };

    //Selects favorite filter and uppdates select of the correct filters in state
    setFavoritesAsSelected = (id) => {
        let faves = this.state.favoriteFilters;
        let filters = this.state.filters;

        let activeIds = faves[id].ids;

        activeIds.map(id => {
            return filters.find(f => {
                if (f.id === id) {
                    f.selected = true;
                }
                return f.id === id
            })
        })

        this.handleActiveFilters();

        this.setState({filter: filters})
    };

    //Sets all filters to seleted: false
    clearAllFilters = () => {
        if (this.state.filters.find(item => item.selected)) {
            let temp = this
                .state
                .filters
                .map(filter => {
                    return filter.selected = false
                })

            this.handleActiveFilters();

            this.setState({filters: temp})
        }
    };

    filterFeedback = (active) => {
        let queries = {}

        for (let a of active) {
            if (a.key in queries) {
                queries[a.key] = [
                    ...queries[a.key],
                    a.title
                ]
            } else {
                queries[a.key] = [a.title]
            }
        }
        this
            .props
            .filterFeedback(queries);

    }

    render() {
        return (
            <div className="filter-wrapper">

                <div className="dd-container">
                    {/*Dropdown-wrapper*/}
                    <h2>Filter</h2>
                    {this.state.filters.length > 0 && <F>
                        <Dropdown
                            titleHelper='HFB'
                            title='HFB'
                            list={this.dropdownList('hfbName')}
                            toggleItem={this.toggleSelected}/>

                        <Dropdown
                            titleHelper="Item Number"
                            title='Item Number'
                            list={this.dropdownList('itemNumber')}
                            toggleItem={this.toggleSelected}/ >
                        
                        <Dropdown
                            titleHelper="Item Name"
                            title='Item Name'
                            list={this.dropdownList('itemName')}
                            toggleItem={this.toggleSelected}/ >

                        <Dropdown
                            titleHelper="Supplier Number"
                            title='Supplier Number'
                            list={this.dropdownList('supplierNumber')}
                            toggleItem={this.toggleSelected}/ >

                        <Dropdown
                            titleHelper='Saved filter'
                            title='Saved filters'
                            list={this.state.favoriteFilters}
                            toggleItem={this.setFavoritesAsSelected}/>
                    </F>}
                </div>
                <div className='af-container'>
                    {/*Active filters-wrapper*/}
                    <ActiveFilters
                        list={this.state.activeFilters}
                        toggleItem={this.toggleSelected}
                        clear={this.clearAllFilters}
                        add={this.addFavoriteFilters}
                        validate={!this.validateNewFavorite()}/>
                </div>
            </div>
        );
    }
}

export default Filter;
