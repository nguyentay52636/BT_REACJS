import React from 'react'
import Header from './Header'
import './Style.css'
import Body from './Body'
import Footer from './Footer'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
export default function BaiTapThucHanhLayout() {
  return (
    <div>
    <Header />
  <Body/>
  <Footer/>
    </div>
  )
}
