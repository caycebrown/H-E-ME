import React from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/shop';

class Main extends React.Component {

  
    render() {
        console.log('state.data' + this.props.data)
      return(
        <Wrapper>
          <Header />
          <Shop data={this.props.data} 
                selectStore={this.props.selectStore}
                addItem={this.props.addItem}
                selectedItems={this.props.selectedItems}
                items={this.props.items} />
          <Footer />
        </Wrapper>
      )
    };
  }
  
  export default Main;