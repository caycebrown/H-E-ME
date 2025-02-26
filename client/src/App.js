import React from "react";
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [1,2,3,4],
      storeId: null,
      selectedItems: [],
      items: [],
      aisles: []
    };
  };

  //Retrieves all items from the database and returns the "name" column for each
  getItems = () => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => data.map(data => this.setState({items: [...this.state.items, data.name]})))
      console.log(this.state.items);
  }

  //Sets a store id in state that will be used to query the database
  selectStore = (e) => {
    let store = e.target.value;
    this.setState({storeId: store});
    console.log('storeId : ' + this.state.storeId);
  };


  //Add's the selected item to state and removes it if it already exists there
  addItem = item => {
    if(this.state.selectedItems.includes(item)){
      let index = this.state.selectedItems.indexOf(item);
      if(index === 0){
        let updateSItems = this.state.selectedItems.slice(1);
        this.setState({selectedItems:  updateSItems});
        console.log('removed 0 index from state.selectedItems: ' + this.state.selectedItems)
      }else {
        let arr1 = this.state.selectedItems.slice(0, index);
        let arr2 = this.state.selectedItems.slice((index + 1));
        let updateSItems = arr1.concat(arr2);
        this.setState({selectedItems: updateSItems});
        console.log('removed from state.selectedItems: ' + this.state.selectedItems)
      };

    }else {
      this.setState({selectedItems: [...this.state.selectedItems, item]});
      console.log('added to state.selectedItems: ' + this.state.selectedItems)
    };
    
  };

  //
  submitList = () => {
    const selectedItems = this.state.selectedItems;
    console.log(selectedItems);
      fetch(`/api/complete`, {
      method: "POST",
      body: JSON.stringify(selectedItems),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(res => console.log(res))
    }


  


  componentDidMount() {
    this.getItems()
  }


  
  render() {
    return(
      <Router>
        <Switch>
        <Route path='/' 
               render={(props) => <Main {...props} 
                                        data={this.state.data}
                                        items={this.state.items} 
                                        selectStore={this.selectStore}
                                        addItem={this.addItem}
                                        selectedItems={this.state.selectedItems}
                                        submitList={this.submitList}/>}/>
                                  
        </Switch>
      </Router>
    )
  };
}

export default App;
