import React from "react";
import Shap1 from "../assest/card-shap (1).png";
import Shap2 from "../assest/card-shap (2).png";
import Shap3 from "../assest/card-shap (3).png";
import Shap4 from "../assest/card-shap (4).png";
import SpanBG from "../assest/span-bg.png";
import Email from "../assest/email-icon.png";
import Google from "../assest/google.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PasswordField from "material-ui-password-field";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const SignUp = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Deailog  */}
      <div className="term">
        <Dialog
          className="term"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <div className="flex flex-col items-center">
              <h2 className="primary-font ">Terms & Condition</h2>
              <p>
                Help protect your website and its users with clear and fair
                website terms and conditions. These terms and conditions for a
                website set out key issues such as acceptable use, privacy,
                cookies, registration and passwords, intellectual property,
                links to other sites, termination and disclaimers of
                responsibility. Terms and conditions are used and necessary to
                protect a website owner from liability of a user relying on the
                information or the goods provided from the site then suffering a
                loss. Making your own terms and conditions for your website is
                hard, not impossible, to do. It can take a few hours to few days
                for a person with no legal background to make. But worry no
                more; we are here to help you out. All you need to do is fill up
                the blank spaces and then you will receive an email with your
                personalized terms and conditions.
              </p>
              <button
                onClick={handleClose}
                className="bg-primary btn w-[25rem] rounded-[10px] text-light font-medium mt-3 h-[60px]"
              >
                I Agree to the Terms & Conditions
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {/* Deailog  */}
      <form>
        <div className="container">
          <div className="card flex flex-col items-center rounded-[30px] py-[3rem] relative">
            <div className="d-none d-md-block">
              <img
                className="w-[35px] absolute left-[-15px] top-[30%]"
                src={Shap4}
              />
              <img
                className="w-[79px] absolute xl:left-[13%] left-[3%] bottom-[23%]"
                src={Shap1}
              />
              <img
                className="w-[79px] absolute right-[-40px] bottom-[23%]"
                src={Shap2}
              />
              <img
                className="w-[79px] absolute right-[7%] top-[20%]"
                src={Shap3}
              />
            </div>

            <div className="text-center w-100">
              <h1 className="primary-font ">
                Create a
                <span
                  className="span-bg signup-span"
                  style={{ backgroundImage: `url(${SpanBG})` }}
                >
                  {" "}
                  New Account
                </span>{" "}
              </h1>
            </div>

            <div className="sm:w-[500px] w-[320px] my-5">
              <div className="row">
                <div className="col-lg-6 col-12">
                  {" "}
                  <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3">
                    <TextField
                      className="w-[100%]"
                      id="outlined-number"
                      placeholder="First Name"
                      type="text"
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  {" "}
                  <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3">
                    <TextField
                      className="w-[100%]"
                      id="outlined-number"
                      placeholder="Last Name"
                      type="text"
                      InputLabelProps={{
                        shrink: false,
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Enter your email address */}
              <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3">
                <TextField
                  className="w-[100%]"
                  id="outlined-number"
                  placeholder="Enter your email address"
                  type="email"
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </div>
              {/* Enter your phone number */}
              <div className="input-bg w-100 flex px-[30px] py-[7px] rounded-[10px] mb-3">
                <TextField
                  className="w-[100%]"
                  id="outlined-number"
                  placeholder="Enter your phone number"
                  type="text"
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </div>

              <div className=" input-bg w-100 flex justify-center items-center px-[30px] h-[65px] rounded-[10px] mb-3">
                <PasswordField
                  variant="outlined"
                  className="w-[100%] myTextField"
                  id="outlined-number"
                  placeholder="Enter your password"
                  type="password"
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </div>

              <div className=" input-bg w-100 flex justify-center items-center px-[30px] h-[65px] rounded-[10px] mb-3">
                <PasswordField
                  variant="outlined"
                  className="w-[100%] myTextField"
                  id="outlined-number"
                  placeholder="Confirm password"
                  type="password"
                  InputLabelProps={{
                    shrink: false,
                  }}
                />
              </div>
              <div className="flex">
                <div>
                  <Checkbox />
                </div>

                <p className="text-dark">
                  I agree to the to the{" "}
                  <span
                    onClick={handleClickOpen}
                    className="pointer text-primary font-medium"
                  >
                    Terms & Conditions
                  </span>{" "}
                  and oblige to the{" "}
                  <span className="pointer text-primary font-medium">
                    {" "}
                    Privacy Policy
                  </span>{" "}
                </p>
              </div>

              <button className="bg-primary btn w-100 rounded-[10px] text-light font-medium mt-3 h-[60px]">
                Register
              </button>
              <div className="row mt-[30px] px-[3rem]">
                <div className="col-5 my-auto">
                  {" "}
                  <hr />
                </div>
                <div className="col-2 text-center">
                  {" "}
                  <p className="text-dark">OR</p>
                </div>
                <div className="col-5 my-auto">
                  {" "}
                  <hr />
                </div>
              </div>
              <button className="border border-primary btn w-100 rounded-[10px] text-primary font-medium mt-3 h-[60px] flex justify-center items-center">
                <img className="mx-3" src={Google} /> Sign in with Google
              </button>
              <div className="text-center mt-2">
                Already have an account?
                <Link to="/sign-in">
                  {" "}
                  <span className="fw-bold text-primary pointer">Sign In</span>
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
