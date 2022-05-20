import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const [value, setValue] = useState("GSNC@LLC.com");
  const [copied, setCopied] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <Container sx={{ pt: 10 }}>
      <div className="contact">
        <div className="font">
          <Box sx={{ display: "flex", justifyContent: "center", pb: 3 }}>
            <Typography variant="h4" marginTop={3}>
              <button onClick={handleOpen}>Contact Us Here</button>
            </Typography>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
               
              >
                To fill out an ATM form:
                <br/>
                 <Link to={"/info#"}>Click here</Link>    <br/>
                or    <br/>
                 Email us at: GSNC@GSNC.edu
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                  <Button>Copy email to clipboard</Button>
                </CopyToClipboard>

                {copied ? (
                  <span style={{ color: "black", background: "white" }}>
                    <br/>
                    Email succesfully copied.
                  </span>
                ) : null}
              </Typography>
            </Box>
          </Modal>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", pb: 6 }}>
            <Typography
              variant="h6"
              sx={{ display: "flex", justifyContent: "space-evenly", pb: 6 }}
            ></Typography>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
