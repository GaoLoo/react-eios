import React from 'react';
import Layout from '../compontents/layout'
import {WingBlank} from 'antd-mobile';
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
            <img className="title-img" src={'../static/images/health_icon-49.png'}/>
            <p className="title">小i</p>
            <WingBlank>
              <p className="sub-title">V1S手机您的专属健康守门人，负一屏的健康屏，共包含一键看医生/专家挂号/病例档案/健康检测四项服务。小病线上问诊，处方开药，送药上门实现全流程服务闭环；大病线上挂号，名医推荐，轻松解决看病难问题。另外还有健康检测数据归档，异常数据监测回访等贴心服务。</p>
            </WingBlank>
          </div>
          <section>
            <WingBlank>
              <p className="title">播放功能讲解视频</p>
              <TXVideo option={this.state.videoOption1} vid="e05388bike8"/>
            </WingBlank>
          </section>
        </Layout>
      </div>
    )
  }
}
export default Index