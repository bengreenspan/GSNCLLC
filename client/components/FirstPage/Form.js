import React, { useState } from "react";
import { send } from "emailjs-com";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MuiPhoneNumber from "material-ui-phone-number";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Parallax, Background } from "react-parallax";
import * as BS from "react-bootstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Form = () => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false) && window.location.reload;

  const [toSend, setToSend] = useState({
    business: "",
    email: "",
    name: "",
    phone: "",
    message: "",
    reply_to: "",
  });

  const [errors, setErrors] = useState({
    business: "",
    email: "",
    name: "",
    phone: "",
    message: "",
    reply_to: "",
  });

  const validate = () => {
    let temp = {};
    temp.name = toSend.name ? "" : "Name is required";
    temp.business = toSend.business ? "" : "Business Name is required";
    temp.email = /$^|.+@.+..+/.test(toSend.email) ? "" : "Email is not valid";
    temp.phone =
      toSend.phone.length > 8 ? "" : "Please enter a valid phone number";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const resetForm = () => {
    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setOpen(true);
      // send("service_0t74imh", "template_q1ecudp", toSend, "87uW5IjR7xE2EqVKU")
      //   .then((response) => {
      //     console.log("SUCCESS!", response.status, response.text);
      //   })
      //   .catch((err) => {
      //     console.log("FAILED...", err);
      //   });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="graycard" data-aos="zoom-in" data-aos-duration="1000">
      <BS.Container>
        <Container className="form" sx={{ pt: 15 }}>
          <BS.Row>
            <BS.Col md={7}>
              <div>
                <Typography variant="h3" component="h3" sx={{ pb: 8, pl: 8 }}>
                  <div className="fontbold">ATM Submission Form</div>
                </Typography>

                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  autoComplete="off"
                  onSubmit={onSubmit}
                >
                  <Container>
                    <Box
                      className="font"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <TextField
                        required
                        id="outlined-name-input"
                        label="Name"
                        type="name"
                        autoComplete="name"
                        value={toSend.name}
                        onChange={handleChange}
                        name="name"
                        helperText={errors.name}
                      />
                      <TextField
                        required
                        id="outlined-business-input"
                        label="Business Name"
                        type="business"
                        autoComplete="Business"
                        // sx={{ flex: 50 }}
                        value={toSend.business}
                        onChange={handleChange}
                        name="business"
                        helperText={errors.business}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        "& > :not(style)": { m: 0 },
                      }}
                    >
                      <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        autoComplete="email"
                        value={toSend.email}
                        onChange={handleChange}
                        name="email"
                        helperText={errors.email}
                      />
                      <TextField
                        required
                        id="outlined-phonenumber-input"
                        label="Phone Number"
                        // type="number"
                        autoComplete="phone"
                        value={toSend.phone}
                        onChange={handleChange}
                        name="phone"
                        helperText={errors.phone}
                      />
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <TextField
                        id="outlined-message-input"
                        label="Message"
                        type="message"
                        autoComplete="message"
                        value={toSend.message}
                        onChange={handleChange}
                        name="message"
                        multiline={true}
                        rows={3}
                        sx={{ height: "100%", width: 10, fontSize: 33 }}
                        helperText="Enter any other details you'd like to mention"
                      ></TextField>
                    </Box>
                  </Container>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      pt: 8,
                      pb: 12,
                    }}
                  >
                    {/* <div data-aos="zoom-in" data-aos-duration="1000"> */}
                    <button>
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Submit</span>
                    </button>

                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={resetForm}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                          >
                            Thanks for submitting your details
                          </Typography>
                          <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Thank you for reaching out. We will contact you
                            shortly.
                          </Typography>
                        </Box>
                      </Fade>
                    </Modal>
                    {/* </div> */}
                  </Box>
                </Box>
              </div>
            </BS.Col>
            <BS.Col>
              <BS.Row>
                <Typography
                  variant="h3"
                  marginTop={0}
                  sx={{ pl: 9, pt: 9, pb: 0, justifyContent: "center" }}
                >
           
                  <h4 className="font">
                    Submit your contact and business information here and we
                    will do our best to get back to you within a day
                  </h4>
              
                </Typography>{" "}
              </BS.Row>
              <BS.Row>
              {/* <div className="outline"> */}
                <Parallax bgImage={"/plane.png"} strength={140}>
                  <div className="transparent">
                    {" "}
                    <img src="/hysoun2.png" width={200} />
                  </div>
                </Parallax>
                {/* </div> */}
              </BS.Row>
            </BS.Col>
          </BS.Row>
        </Container>
      </BS.Container>
    </div>
  );
};

export default Form;
