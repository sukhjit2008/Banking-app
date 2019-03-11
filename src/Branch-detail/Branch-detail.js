import React, { Component } from 'react'
import  axios  from 'axios';
import './Branch-detail.css'
export default class BranchDetail extends 
Component {
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
    ).catch()
    const id= this.props.match.params.id;
    this.setState({id}) 
   }
   
  render() {
    const branch= this.state.branches?(this.state.branches.filter(
      (b)=>{
        return b.id===this.state.id;
      }
    ).map(
      (b)=>{
        return (<div key="b.id" className="branch-detail">
        <h2>Branch: {b.name}</h2><br/>
        <p>Address:- {b.address},</p>
        <span>{b.country},</span>
        <span> {b.postalCode},</span>
        <span> {b.townName}</span>
        <p>Contact No: {b.phoneNo}</p> 
        </div>)
      }
    )):(<p>No Details Available</p>)   
    return (
      <div >
        {branch}
      </div>
    )
  }
}
