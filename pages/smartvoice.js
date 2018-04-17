import React from 'react';
import Layout from '../compontents/layout'
import {WingBlank,WhiteSpace } from 'antd-mobile';
import TXVideo from '../compontents/video/txVideo'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      videoOption1: {
        onwrite:() => console.log(123)
      }
    }
  }
  render() {
    return (
      <div>
        <Layout headerTitle={'小I智能语音'} hasHeader={true}>
          <div>
            <WhiteSpace size="xl"></WhiteSpace>
            <img className="title-img" src={'../static/images/bot.svg'}/>
            <p className="title">小i</p>
            <WingBlank>
              <p className="sub-title">小i智能语音，任何时候，一键语音，说到做到，还能支持方言哦！</p>
            </WingBlank>
          </div>
          <section>
            <WingBlank>
              <p className="title">播放功能讲解视频</p>
              <TXVideo option={this.state.videoOption1} vid="y0538dv9g8k"/>
            </WingBlank>
          </section>
        </Layout>
        <style jsx>
        {`

        `}
        </style>
      </div>
    )
  }
}
export default Index