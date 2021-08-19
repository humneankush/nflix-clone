import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="enter your email..." />
          <input type="password" placeholder="enter your password..." />
          <button className="loginButton">Sign In</button>
          <span>
            <small>
              this page is protected by google recaptcha to ensure that you are
              not bot.. <b>Learn More</b>
            </small>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
