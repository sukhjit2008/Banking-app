import React, { Component } from 'react'
import Branch from '../Branch/Branch';
import { Link } from 'react-router-dom';
import './Branch-list.css'
class BranchList extends Component {
  
  render() {
    return (
   <div>
        <ul>
         {  this.props.branches.length?(this.props.branches.sort().map((b)=>{
          return <Link to={'/'+b.id} key={b.id}><Branch  
          name={b.name} /></Link>
         })):(<h1 className="heading-pimary">No Branch Selected</h1>)}
        </ul>
    </div>
    )
  }
}
export default BranchList;