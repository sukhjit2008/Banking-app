import React, { Component } from 'react'
import './Branch-Search.css'
import BranchList from '../Branch-list/Branch-list';



class BranchSearch extends Component {

  state={
    term:'',
    id:'',
    filteredBranches:[],
    detalis:false
  }
  changeHandler=(e)=>{
    this.setState({term:e.target.value});   
  }
  
  submitHandler=(e)=>{
    e.preventDefault(); 
    this.setState({term:''});
    const filteredBranches= this.props.branches.filter(
      (b)=>{
        return b.townName===this.state.term.toUpperCase();
      }
    );
    this.setState({filteredBranches}); 
  }
  
  render() {
    const branch10 = this.state.filteredBranches.sort((a,b)=>{
      if(a.name>b.name) return 1;
      else if (b.name>a.name) return -1;
      else return 0;
  });
  
    return (
      
    <div className="new-form">
        <form onSubmit={this.submitHandler}>
            <label htmlFor="name">Enter a city name to find branches near you</label>
            <h5>[App only works for United Kingdom Cities.]</h5><br/>
            <input type="text" id="name" placeholder="City Name..." onChange={this.changeHandler} value={this.state.term}/><br/>
        <   button className="btn btn-white">Search</button>
        </form>
        <BranchList branches={branch10} />     
    </div>  
    )
  }
}
export default BranchSearch;