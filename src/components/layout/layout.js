import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import {
  Box
} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import Header from "../header/header"
import Footer from "../footer/footer"

import * as styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <Box className={styles.wrapper}>
        <Header siteTitle='Title'/>
        <main className={styles.main}>{children}</main>
        <Footer />
      </Box>
    </StyledEngineProvider>
  )
}
  
export default Layout