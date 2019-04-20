import React from 'react';
import $ from 'jquery';
import '../scss/SearchBox.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  submit() {
    console.log('VALUE: ', this.state.searchText);
    $.ajax({
      url: '/artists',
      method: 'GET',
      data: this.state.searchText,
      dataType: 'json'
    }).done((data) => {
      console.log('DATA: ', data);
    })
  }

  render() {
    return (
      <div className='search-container'>
        <TextField
          placeholder='Enter artist name to see tracks'
          value={this.state.searchText}
          onChange={this.onChange}
          style={{ width: '60%'}}
        />
        <Button
          variant='contained'
          color='primary'
          onClick={this.submit}
          style={{ marginLeft: '5%' }}
        >Search
        </Button>
      </div>
    );
  }
}
