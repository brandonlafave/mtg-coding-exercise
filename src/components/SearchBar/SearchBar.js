import React, { Component } from 'react';
import InputField from '../commons/InputField';
import SelectField from '../commons/SelectField';
import Button from '../commons/Button';
import safeDefaults from '../../utilities/safeDefaults';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      orderBy: props.orderBy,
      isLoading: props.isLoading,
      options: [{
        name: 'Name',
        value: 'name'
      },{
        name: 'Artist',
        value: 'artist'
      },{
        name: 'Set Name',
        value: 'setName'
      }, {
        name: 'Type',
        value: 'type'
      }]
    }
  }

  handleSubmit = () => {
    if (this.props.fetchCardsCallback) {
      this.props.fetchCardsCallback({
        searchQuery: this.state.searchQuery,
        orderBy: this.state.orderBy
      });
    }
  }

  handleKeyPressChange = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    let orderBy = this.state.orderBy;
    let searchQuery = this.state.searchQuery;
    let isSortId = (target.id === 'sort')

    if (target.id === 'search') {
      searchQuery = `&name=${encodeURIComponent(safeDefaults(e.target.value))}`;
    }

    if (isSortId) {
      orderBy = target.value;
    }

    this.setState({
      searchQuery,
      orderBy
    }, () => {
      if (isSortId) {
        this.handleSubmit();
      }
    });
  }

  render() {
    return (
      <section className='search-bar-wrapper'>
        <InputField
          id='search'
          label='Search by name'
          placeholderText='Search by name'
          onKeyPressCallback={(e) => this.handleKeyPressChange(e)}
          changeCallback={(e) => this.handleInputChange(e)}
        />
        <SelectField
          id='sort'
          options={ this.state.options }
          label='Sort By'
          changeCallback={(e) => this.handleInputChange(e)}
          defaultValue='name'
        />
        <Button
          id='search-btn'
          buttonClassName='search-btn'
          buttonTitle='Search'
          buttonLabel='Search'
          ariaLabel='Search'
          isDisabled={this.props.disableSearchButton}
          onClick={this.handleSubmit}
        />
      </section>
    );
  }
}

export default SearchBar;
