import React, { Component } from "react";
import { Link } from "react-router-dom";


class VerifNum extends Component {
  
  
  render() {
    return (
      <form className="input-btn-form">
        <div className="inputnumber">
        <input
          placeholder="  "
          name="number"
          className="input-number"
          type="number"
          onChange={this.onChange}
        />
        <input
          placeholder="  "
          name="number"
          className="input-number"
          type="number"
          onChange={this.onChange}
        />

          <input
          placeholder=" "
          name="number"
          className="input-number"
          type="number"
          onChange={this.onChange}
        />

        
          <input
          placeholder=" "
          name="number"
          className="input-number"
          type="number"
          onChange={this.onChange}
        />
        
          <input
          placeholder=" "
          name="number"
          className="input-number"
          type="number"
          onChange={this.onChange}
        />
          <input
          placeholder=" "
          name="number"
          className="input-number"
          type="number"
          onChange={this.onChange}
        />

        </div>

        <Link to="/inicio">
        <button type="button" className="btn-green" >
          Aceptar
        </button>
         </Link>

      </form>
    );
  }
}

export default VerifNum;