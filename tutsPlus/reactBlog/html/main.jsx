class Signin extends React.Component {
  constructor(props){
    super(props);
    this.signIn = this.signIn.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'',
      password:''
    };
  }
  signIn(){
    axios.post('/signin', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error)
    });
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  render(){
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading"> Please Sign In </h2>
          <label for="inputEmail" className="sr-only"> Email Address </label>
          <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email Address" required autofocus />
          <label for="inputPassword" className="sr-only"> Password</label>
          <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button"> Sign in</button>
        </form>
      </div>
    )
  }
}

class SignUp extends React.Component{
  render(){
    return(
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please Sign Up</h2>
          <label for="inputName" className="sr-only">Name</label>
          <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
          <label for="inputPassword" className="sr-only">Password</label>
          <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign Up</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Signin />,
  document.getElementById("app")
);
