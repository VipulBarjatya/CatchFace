import React from "react";
import Tilt from "react-parallax-tilt";

const Signin = ({ onRouteChange }) => {
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
          style={{ boxShadow: "0px 0px 10px inset rgba(255,255,255,0.5)" }}
          class="br3 ba dark-gray b--white-30 mv4 w-100 w-50-m w-25-l mw5 center grow"
        >
          <main className="pa4 white-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" for="email-address">
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
                  />
                </div>
                <div clasNames="mv3">
                  <label className="db fw6 lh-copy f6" for="password">
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
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  onClick={() => onRouteChange("home")}
                  className="b ph3 pv2 input-reset ba b--white-30 bg-transparent grow pointer f6 dib white-80"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => onRouteChange("register")}
                  className="f6 link dim white-80 db pointer"
                >
                  Register
                </p>
              </div>
            </form>
          </main>
        </article>
      </Tilt>
    </div>
  );
};

export default Signin;
