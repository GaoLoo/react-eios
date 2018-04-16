import React from 'react';
import Layout from '../compontents/layout'
import { WingBlank } from 'antd-mobile';
import Link from 'next/link'

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout headerTitle={'基础操作'}>
          <WingBlank>
          </WingBlank>
        </Layout>
      </div>
    )
  }
}
export default Index