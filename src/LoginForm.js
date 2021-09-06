import { Component } from 'react';
class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      pass: "",
      // err_e: "",
      // err_p: "",
      // msg: "",
      err_obj: {}
    }

    //khai bao ra
    // this.hanldeInput = this.hanldeInput.bind(this)
    // this.hanldeInputPass = this.hanldeInputPass.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.hamDungChung = this.hamDungChung.bind(this)
  }

  hamDungChung(e) {
    // lay name cua input
    let getName = e.target.name;
    // console.log(getName)
    this.setState({
      [getName]: e.target.value
    })
  }

  // hanldeInput(e){

  //   //llay value cua the input
  //   // console.log(e.target.value)

  //   //lay value cua input va dua vao bien email trong state

  //   this.setState({
  //     email: e.target.value
  //   })

  // }

  // hanldeInputPass(e){

  //   // console.log(e.target.value)
  //   this.setState({
  //     pass: e.target.value
  //   })

  // }


  submitForm(e) {
    e.preventDefault();  //dung su kien mac dinh lai

    let { email, pass } = this.state
    let flag = true;
    let obj = {}

    if (email == "") {
      // this.setState({
      //   err_e: "vui long nhap e"
      // })
      obj.email = "vui long nhap e"
      flag = false;
    }

    if (pass == "") {
      // this.setState({
      //   err_p: "vui long nhap p"
      // })
      obj.pass = "vui long nhap p"
      flag = false;
    }

    console.log(obj)
    // dua cai obj vao state
    if (flag == false) {
      this.setState({
        err_obj: obj
      })
    }


    // if(flag){
    //   this.setState({
    //     msg: "thanh cong"
    //   })
    // }

  }

  showError() {
    let { err_obj } = this.state;
    if (Object.keys(err_obj).length > 0) {
      // muon show html ben trong map thi pai return map va return html 
      return Object.keys(err_obj).map((key, index) => {
        return (
          <p>{err_obj[key]}</p>
        )
      })
    }
  }
  //lang nghe khi co 1 state thay doi thi no tu dong render lai (chay lai)
  render() {
    return (
      <div>
        {this.showError()}
        {/* <p>{this.state.msg}</p> */}
        <form onSubmit={this.submitForm}>
          <input value={this.state.pass} name="pass" onChange={this.hamDungChung} />
          {/* <p>{this.state.err_e}</p> */}
          <input value={this.state.email} name="email" onChange={this.hamDungChung} />
          {/* <p>{this.state.err_p}</p>  */}
          <button type="submit">send</button>
        </form>
      </div>

    )
  }
}

export default LoginForm;