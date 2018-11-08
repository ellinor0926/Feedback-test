import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome'
import onClickOutside from "react-onclickoutside";

class DropdownFavorite extends Component {

    state = {
        listOpen: false,
        headerTitle: this.props.title
    };

    handleClickOutside(e) {
        this.setState({
            listOpen: false
        })
    }

    selectItem = (title, stateKey, id) => {
        this.setState({
            headerTitle: title,
            listOpen: false
        }, this.props.resetThenSet(stateKey, id))
    };

    toggleList = () => {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    };

    render() {
        const {list} = this.props;
        const {listOpen, headerTitle} = this.state;
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={this.toggleList}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {listOpen
                        ? <FontAwesome name="angle-up" size="2x"/>
                        : <FontAwesome name="angle-down" size="2x"/>
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    {list.map((item) => (
                        <li className="dd-list-item" key={item.id}
                            onClick={() => this.selectItem(item.title, item.key, item.id)}>{item.title} {item.selected &&
                        <FontAwesome name="check"/>}</li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default onClickOutside(DropdownFavorite);