import React, { Component } from 'react'


class AddNew extends React.Component
 {
  

constructor(props){
super(props);
this.state={
productName:"",
productPrice:0,

}

      }
      render() {
        return (
      
        <form className='container' onSubmit={(e)=> {
          e.preventDefault();

        this.props.AddItem(this.state.productName,Number(this.state.productPrice));
        }}>
          
        <div className="col-6 mb-3">
          <label className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e)=>{
              this.setState({productName: e.currentTarget.value})
            }}
            value={this.state.productName}
          />
          
        </div>
        <div className="col-6 mb-3">
          <label  className="form-label">
            Price
          </label>
          <input
             type="number"
             className="form-control"
             id="price"
             name="productPrice"
            onChange={(e)=>{
              this.setState({productPrice: e.currentTarget.value})
            }}
            value={this.state.productPrice}
          />
        </div>
        
        <button type="submit" className="btn btn-primary" > 
          Submit
        </button>
      </form>
      
    )
  }
}
export default AddNew;