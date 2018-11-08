import React, {Component} from 'react';
import onClickOutside from "react-onclickoutside";
import FontAwesome from 'react-fontawesome';
import './dropdown.css';
import DropdownSearch from "./dropdownSearch";

class Dropdown extends Component {

    state = {
        listOpen: false,
        headerTitle: this.props.title,
        list: this.props.list
    };

    handleClickOutside(){
        this.setState({
            listOpen: false,
            results: []
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    handleResults = (updatedList) => {
        this.setState({
            list: updatedList
        })
    };

    static getDerivedStateFromProps(nextProps){
        const count = nextProps.list.filter(function(a) { return a.selected; }).length;
        if(count === 0){
            return {headerTitle: nextProps.title}
        }
        else if(count === 1){
            return {headerTitle: `${count} ${nextProps.titleHelper}`}
        }
        else if(count > 1){
            return {headerTitle: `${count} ${nextProps.titleHelper}s`}
        }
    }

    render() {
        const{toggleItem} = this.props;
        const {listOpen, headerTitle, list} = this.state;
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <FontAwesome name="angle-up" size="2x"/>
                        : <FontAwesome name="angle-down" size="2x"/>
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    <DropdownSearch onSearch={this.handleResults} list={list}/>
                    {list.map(item => (
                        <li className="dd-list-item"
                            key={item.id}
                            onClick={() => toggleItem(item.id)}
                        >
                            {item.title} {item.selected && <FontAwesome name="check"/>}
                        </li>
                    ))}
                </ul>}
            </div>
        )

        // const{toggleItem} = this.props;
        // const {listOpen, headerTitle, list} = this.state;
        // return (
        //     <div className="dd-wrapper">
        //         <div className="dd-header" onClick={() => this.toggleList()}>
        //             <div className="dd-header-title">{headerTitle}</div>
        //             {listOpen
        //                 ? <FontAwesome name="angle-up" size="2x"/>
        //                 : <FontAwesome name="angle-down" size="2x"/>
        //             }
        //         </div>
        //         {listOpen && <ul className="dd-list">
        //             <DropdownSearch onSearch={this.handleResults} list={list}/>
        //             {list.map(item => { 
        //                 return (
        //                 <li className="dd-list-item"
        //                     key={item.id}
        //                     onClick={() => toggleItem(item)}
        //                 >
        //                     {item.name} {item.selected && <FontAwesome name="check"/>}
        //                 </li>
        //             )})}
        //         </ul>}
        //     </div>
        // )
    }
}

export default onClickOutside(Dropdown)