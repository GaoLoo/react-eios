
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import Head from 'next/head'

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link href="https://cdn.bootcss.com/antd-mobile/2.1.8/antd-mobile.css" rel="stylesheet" />
          <link href="../static/style/global-style.css" rel="stylesheet" />
        </Head>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.back()}
        >{this.props.headerTitle}
        </NavBar>
        <div className={`content ${this.props.headerTitle ? 'has-header' : ''}`}>
          {this.props.children}
        </div>
        <style jsx>
          {`
          .content {
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            overflow: auto;
          },
          .has-header {
            top:45px;
          }
        `}
        </style>
      </div>
    )
  }
}
export default Layout