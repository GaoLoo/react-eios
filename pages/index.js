import React from 'react';
import Layout from '../compontents/layout'
import { WingBlank } from 'antd-mobile';
import Link from 'next/link'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.manualList = [
      {
        src: '../static/images/rect1-640.png',
        href: '/healthscreen'
      },
      {
        src: '../static/images/rect2-640.png',
        href: '/familygroup'
      },
      {
        src: '../static/images/rect3-640.png',
        href: '/smartvoice'
      },
      {
        src: '../static/images/rect4-640-1.png',
        href: '/basic'
      },
    ]
  }
  Manual() {
    return (
      this.manualList.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href}>
              <img src={item.src} />
            </Link>
            <style jsx>
              {` 
                img{
                  width:100%;
                }
                `}
            </style>
          </li>
        )
      })
    )
  }
  render() {
    return (
      <div>
        <Layout headerTitle={'使用手册'}>
          <ul>
            {this.Manual()}
          </ul>
          <style>
            {`
              ul{
                padding-top:20px;
              }
            `}
          </style>
        </Layout>
      </div>
    )
  }
}
export default Index