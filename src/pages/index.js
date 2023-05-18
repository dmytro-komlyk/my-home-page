import * as React from "react"
import { Toolbar } from "@mui/material";
import Layout from "../components/layout/layout"

import * as styles from "../components/index.module.scss"

const IndexPage = () => (
  <Layout>
    <Toolbar/>
  </Layout>
)

export default IndexPage

export const Head = () => <title>Home Page by Dmytro Komlyk</title>
