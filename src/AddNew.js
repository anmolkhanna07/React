import React, { Component } from 'react'

export default class AddNew extends Component {
  render() {
    return (
      
        <form className='container'>
          
        <div className="col-6 mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Course Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
          
         
        </div>
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Price
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={()=>(this.props.AddItem)}> 
          Submit
        </button>
      </form>
      
    )
  }
}
