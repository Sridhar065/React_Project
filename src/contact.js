import React from 'react'
import './contact.css';
import StorageHelper from './helpers/storageHelper'
import CommonHelper from './helpers/commonHelper'
const commonCall = new CommonHelper();


class Contact_sales extends React.Component {
  constructor(props) {
    console.log("first")
    super(props);
    this.state = {
      id: "",
      firstname: "",
      middlename: "",
      lastname: "",
      district: "",
      city: "",
      city_detils: [],
      gender: "",
      phone: "",
      address: "",
      email: "",
      employee: ""
    };
  }







  async Submit() {
    console.log(this.state)
    if (this.state.firstname == "") {
      alert("Enter firstname");
    }
    else if (this.state.middlename == "") {
      alert("Enter middlename");
    }
    else if (this.state.lastname == "") {
      alert("Enter lastname");
    }
    else if (this.state.district == "") {
      alert("Enter district");
    }
    else if (this.state.city == "") {
      alert("Enter city");
    }
    else if (this.state.gender == "") {
      alert("Enter gender");
    }
    else if (this.state.phone == "") {
      alert("Enter phone");
    }
    else if (this.state.address == "") {
      alert("Enter address");
    }
    else if (this.state.email == "") {
      alert("Enter email");
    }
    else {
      console.log("sri")
      const requestOptions = await fetch('http://localhost:8092/api/v1/employee/get-createlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)

      }).then(res => res.json())
        .then((result) => {
          if (result) {
            console.log(result)
            commonCall.setName({ name: this.state.firstname, lastname: this.state.lastname })
            // commonCall.setNames(this.state.lastname)
            // window.location = "/ViewList";
            alert("Regsister Successfully");
            // this.setState({         
            //   city:result.content,
            //   employee:result.content[0].city,
            // });
            // console.log(this.state.city);
          }
          else {

            return false;
          }
        }, function (error) {
          debugger;
          return false;
        })
    }
  }








  componentWillMount() {
    this.getEmployee();
  }


  async getEmployee() {

    // this.setState({
    //   loading:true
    // });
    await fetch('http://localhost:8092/api/v1/employee/get-city', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }

    }).then(res => res.json())
      .then((result) => {
        if (result) {
          console.log(result)
          this.setState({
            city_detils: result.content,

            loading: false
          });
          console.log(this.state.city);
        }
        else {

          return false;
        }
      }, function (error) {
        debugger;
        return false;
      })

  }


  handleAssign(event, values) {
    var value = values;
    console.log(event.target.value)
    console.log(values)
    this.setState({
      city: event.target.value
    });

  }



  handleChange(event) {
    var value = event.target.name;
    this.setState({
      [value]: event.target.value
    });
  }

  render() {
    return (
      <div id="login">
        <div>

          <form className="gtg">
            <h2 className="sec">Contact Sales</h2>
            <br /><br />
            <table cellpadding="50" className="srs">

              <tr>
                <td className="s1" >First Name</td>
                <td><input type="text" name="firstname" size="15" placeholder="Enter your firstname" maxlength="50" value={this.state.firstname} onChange={this.handleChange.bind(this)} />

                </td>
              </tr>

              <tr>
                <td>Middle Name</td>
                <td><input type="text" name="middlename" size="15" placeholder="Enter your midlename" maxlength="50" value={this.state.middlename} onChange={this.handleChange.bind(this)} />

                </td>
              </tr>

              <tr>
                <td>Last Name</td>
                <td><input type="text" name="lastname" size="15" placeholder="Enter your lastname" maxlength="50" value={this.state.lastname} onChange={this.handleChange.bind(this)} />

                </td>
              </tr>
              <br />

              <tr>
                <td>Dist</td>
                <td><select name="district" value={this.state.district} onChange={this.handleChange.bind(this)}>
                  <option value="-1" selected>select..</option>
                  <option value="TamilNadu">TamilNadu</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Goa">Goa</option>
                  <option value="Kerla">Kerla</option>
                  <option value="Andhra">Andhra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Other">Other</option>
                </select>
                </td>
              </tr>

              <br />
              <tr>
                <td>City</td>
                <td><select name="city" value={this.state.city} onChange={this.handleAssign.bind(this)}>

                  {this.state.city_detils.map((obj) =>
                    <option key={obj.city}>{obj.city}</option>
                  )};
  </select>
                </td>
              </tr>

              <br />
              <tr>
                <td>Gender</td>
                <td>
                  Male <input type="radio" name="gender" value="Male" onChange={this.handleChange.bind(this)} /> &nbsp; &nbsp; &nbsp;

                      Female <input type="radio" name="gender" value="Female" onChange={this.handleChange.bind(this)} /> &nbsp; &nbsp; &nbsp;

                      Other <input type="radio" name="gender" value="Other" onChange={this.handleChange.bind(this)} />
                </td>
              </tr>

              <br />

              <tr>
                <td>Phone : </td>
                <td>
                  {/* <input type="text" name="country code"  value="+91" size="2"/>    */}
                  <input type="text" name="phone" size="10" placeholder="Mbl/no" value={this.state.phone} onChange={this.handleChange.bind(this)} />
                </td>
              </tr>

              <br />
              <tr>
                <td>Address</td>
                <td> <textarea cols="50" rows="5" name="address" placeholder="Enter your address" value={this.state.address} onChange={this.handleChange.bind(this)}>
                </textarea>
                </td>
              </tr>


              <tr>
                <td>Email</td>
                <td><input type="email" id="email" placeholder="Enter your email @gmail" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />
                </td>
              </tr>

              <br />

              {/* {this.state.firstname==""? <button style={this.state.firstname?{}:{display:"none"}} className="btn" style={{ backgroundColor: "#a87919", color: "#fff", fontSize: "120%",width:"120px" }}
        value="Submit" onClick={this.Submit.bind(this)} >Submit</button> :null} 

       {this.state.firstname!=""? <button style={this.state.firstname?{display:"none"}:{}} className="btn" style={{ backgroundColor: "#a87919", color: "#fff", fontSize: "120%",width:"120px" }} 
       value="Submit" onClick={this.UpdateEmployee.bind(this)} >Update</button>:null} &nbsp; &nbsp; */}

              <button className="bts" onClick={this.Submit.bind(this)}>Submit</button>
              


            </table>
          </form>



        </div>
      </div>



    );
  }
}

export default Contact_sales;







