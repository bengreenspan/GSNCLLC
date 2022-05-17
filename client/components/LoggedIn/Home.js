import React from 'react'
import {connect} from 'react-redux'
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <Container sx={{pt:20}}>
    <div>
      <h1>Welcome, {username}</h1>
      <h4>Customer files will be here eventually </h4>
      <p>Maybe for your bozos we can add something else idk</p>
    </div>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
