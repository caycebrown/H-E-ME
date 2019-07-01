import React from 'react';
import '../components/CSS/shop.css';

class Shop extends React.Component {
    constructor() {
        super()
    };



    render() {
        return (
            <div className="contentContainer">
                <div className="center">
                    <p className="heading">Please select a store</p>
                    <select id="store-select" onChange={this.props.selectStore} required>
                    <option  disabled selected value> -- select an option -- </option>
                    <option value="2" data-name="Mueller" >Mueller</option>
                    <option value="4" data-name="Lakeline">Lakeline</option>
                    <option value="1" data-name="Canyon Ridge">Canyon Ridge</option>
                    <option value="3" data-name="Round Rock">Round Rock</option>
                    </select>
                    <div id="main-row">
                        <div id="scroller">
                            {this.props.items.map(item => (
                            <div>
                                <input type="checkbox" value={item} onClick={event => this.props.addItem(event.target.value)} />&nbsp;{item}
                            </div>))}
                        </div>
                        <div id="user-list">
                            {this.props.selectedItems.map(item => (<div>
                                <p key={item}>{item}</p>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Shop;