import React from 'react';
import Layout from '../compontents/layout'
import { WingBlank,WhiteSpace } from 'antd-mobile';
import Link from 'next/link'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesList : [
        '../static/images/front-309.jpg',
        '../static/images/back-314.jpg',
        '../static/images/1-2.svg',
        '../static/images/2-2.svg',
        '../static/images/3-3.svg',
      ]
    }
  }
  render() {
    return (
      <div>
        <Layout headerTitle={'基础操作'}>
          <WhiteSpace size="xl"></WhiteSpace>
          <p className="title">了解V1S手机</p>
          <img className="title-img" src={'../static/images/basic_operation-49.png'}/>
          <WingBlank>
            <ul>

              {
                this.state.imagesList.map((src, index)=>{
                  return(<li key={index}><img src={src}/></li>)
                })
              }
            </ul>
            <style jsx>
              {`
                img{
                  width:100%;
                }
              `}
              </style>
          </WingBlank>
        </Layout>
      </div>
    )
  }
}
export default Index