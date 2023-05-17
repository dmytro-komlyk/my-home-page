import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import Footer from "../footer/footer"

import * as styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle='Title' />
      <div className={styles.wrapper}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}
  
export default Layout