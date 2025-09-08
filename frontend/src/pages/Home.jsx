import React, { useContext } from 'react'
import Start from '../components/Start'
import Mlmedicine from '../components/Mlmedicine'
import WhatAppDoes from '../components/WhatAppDoes'
import Homeblog from '../components/Homeblog'
import QuickDiagnosis from '../components/QuickDiagnosis'
import Faq from '../components/Faq'

const Home = () => {


  return (
   <>
   <Start />
   <Mlmedicine />
   <WhatAppDoes />
   <Faq />
   <Homeblog />
   <QuickDiagnosis />
   </>
  )
}

export default Home
