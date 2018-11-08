import React, {Component} from 'react';
import './active-filters.css';

class ActiveFilters extends Component {

    render() {
        const {list, toggleItem, add, validate} = this.props;
        return(
            <div className='af-wrapper'>
                <h2>Active filters</h2>
                    <ul className='af-list'>
                        {list.map((item, i) => {
                            return(
                                <li className='af-list-item' key={i}>
                                    {item.title}
                                    <div className='af-dismiss-x' onClick={() => toggleItem(item.id)}>x</div>
                                </li>)
                        })}
                    </ul>
                    
                    <div className='btn-container'>
                        <button className='btn save-filter-btn' onClick={add} disabled={validate}>Save filters</button>
                        <button className='btn clear-filters-btn' onClick={this.props.clear}>Clear all filters</button>
                    </div>
            </div>
        )
    }
}

export default ActiveFilters;