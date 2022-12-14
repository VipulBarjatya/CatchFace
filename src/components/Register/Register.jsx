import React from "react";
import Tilt from "react-parallax-tilt";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://catchfacev1.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    // const { onRouteChange } = this.props;
    return (
      <div className="" style={{ overflow: "hidden" }}>
        <Tilt
          className="center"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "auto",
          }}
        >
          <article
            style={{
              boxShadow: "0px 0px 10px inset rgba(255,255,255,0.5)",
              background: "rgba(255,255,255,0.075)",
              backdropFilter: "blur(3px)",
            }}
            class="br3 ba dark-gray b--white-30 mv4 w-100 w-50-m w-25-l mw5 center grow"
          >
            <main className="pa4 white-80">
              <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f1 fw6 ph0 mh0">Register</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">
                      Name
                    </label>
                    <input
                      style={{
                        boxShadow: "0px 0px 10px inset rgba(255,255,255,0.5)",
                      }}
                      className="pa2 input-reset ba b--white-30 bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="name"
                      id="name"
                      onChange={this.onNameChange}
                    />
                  </div>
                  <div className="mt3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="email-address"
                    >
                      Email
                    </label>
                    <input
                      style={{
                        boxShadow: "0px 0px 10px inset rgba(255,255,255,0.5)",
                      }}
                      className="pa2 input-reset ba b--white-30 bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email-address"
                      id="email-address"
                      onChange={this.onEmailChange}
                    />
                  </div>
                  <div clasNames="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">
                      Password
                    </label>
                    <input
                      style={{
                        boxShadow: "0px 0px 10px inset rgba(255,255,255,0.5)",
                      }}
                      className="b pa2 input-reset ba b--white-30 bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="password"
                      id="password"
                      onChange={this.onPasswordChange}
                    />
                  </div>
                </fieldset>
                <div className="">
                  <input
                    onClick={this.onSubmitSignIn}
                    className="b ph3 pv2 input-reset ba b--white-30 bg-transparent grow pointer f6 dib white-80"
                    type="submit"
                    value="Register"
                  />
                </div>
              </div>
            </main>
          </article>
        </Tilt>
      </div>
    );
  }
}

export default Register;
