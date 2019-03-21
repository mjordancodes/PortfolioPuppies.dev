import React from "react"
import "./styles.css"

import AboutSection from '../components/about'
import WhenSection from '../components/whenwhere'
import WhoSection from '../components/members'
import ConnectSection from '../components/connect'
import Footer from '../components/footer'

export default () => (
  <>
    <AboutSection />
    <WhenSection />
    <WhoSection />
    <ConnectSection />
    <Footer />
  </>
)
