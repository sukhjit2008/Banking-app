import React, { Component } from 'react'
import BranchSearch from '../Branch-Search/Branch-Search';
import './Dashboard.css';
import axios from 'axios';




 class Dashboard extends Component {

  state={
    branches:[],
    id:''
  }
   componentDidMount(){
    axios.get('https://api.halifax.co.uk/open-banking/v2.2/branches').then(
      (res)=>{
       const branch=res.data.data[0].Brand[0].Branch.map(
          (branch)=>{
            const id = branch.Identification;
            const name=branch.Name;
            const address= branch.PostalAddress.AddressLine[0];
            const country= branch.PostalAddress.Country;
            const postalCode= branch.PostalAddress.PostCode;
            const townName= branch.PostalAddress.TownName;
            const phoneNo=branch.ContactInfo[0].ContactContent;
              return {id,name,address,country,postalCode,townName,phoneNo}
          }
        )
        this.setState({
          branches:branch
        })     
      }
    ).catch(
      ()=>{
        return <p>Something went wrong!</p>
      }
    )
   }
   
   
  render() {
   
    return (
      <div className="Dashboard">     
         <h1 className="heading-pimary">Bank branches</h1><br/>
         <BranchSearch branches={this.state.branches}/>    
     </div>
    )
  }
}
export default Dashboard;