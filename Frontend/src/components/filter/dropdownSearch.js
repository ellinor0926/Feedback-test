import React, {Component} from 'react';

class DropdownSearch extends Component {

    state = {
        list: this.props.list,
        results: []
    };

    filterList = (event) => {
        let updatedList = this.state.list;

        updatedList = updatedList.filter(item => {
            return item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
       this.setState({
           results: updatedList
       });

        this.props.onSearch(updatedList)
    };

    render() {
        return(
            <form>
                <input className='dd-list-search' type="text" placeholder='Search' onChange={this.filterList} />
            </form>
        )
    }
}

export default DropdownSearch;