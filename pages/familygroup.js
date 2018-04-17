import React from 'react';
import Layout from '../compontents/layout'
import {WingBlank,WhiteSpace} from 'antd-mobile';
import PhoneContent from '../compontents/PhoneContent'

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout headerTitle={'家人圈'} hasHeader={true}>
          <WhiteSpace size="xl"></WhiteSpace>
          <p className="title">健康屏</p>
          <img className="title-img" src={'../static/images/family_group-41.png'}/>
          <WingBlank>
            <p className="sub-title">家人圈，给家人一个盛放爱的容器，主要包括亲聊/家庭相册/亲情协助三部分功能，亲聊实现家人零距离沟通，视频/语音/文字任意切换；一键分享实时照片，分享才有爱；另外还有远程亲情协助功能，帮助父母了解更多V1S手机的有趣功能。</p>
          </WingBlank>
          <section>
          <p className="title">详细分步骤讲解</p>
          <PhoneContent>
            <img className={'phone-within'} src={'../static/images/chat1-2.gif'} />
          </PhoneContent>
          <WingBlank>
            <p className="explain">亲聊操作：亲聊>录像按钮>录像结束松开（手指上滑取消发送；点击“更多”按钮切换聊天模式）地</p> 
          </WingBlank>
          <style jsx global>
            {`
              img.phone-within{
                width:100%;
                height:100%;
              }
              .title{
                text-align:center;
              }
              .title-img{
                display:block;
                margin:auto;
              }
              p.sub-title{
                font-size: 12px;
                font-weight: 200;
                font-style: normal;
                text-decoration: none;
                text-transform: none;
                color: rgb(51,51,51);
                background-color: initial;
                line-height: 24px;
                letter-spacing: 0.75px;
                text-shadow: none;
              }
              p.explain{
                font-size: 14px;
                font-weight: 400;
                font-style: normal;
                text-decoration: none;
                text-transform: none;
                color: rgba(0,0,0,0.54);
                background-color: initial;
                line-height: 19px;
                letter-spacing: normal;
                text-shadow: none;
                text-align:center;
              }
            `}
          </style>
        </section>
        <section>
        <PhoneContent>
          <img className={'phone-within'} src={'../static/images/photobooth-2.gif'} />
        </PhoneContent>
        <WingBlank>
          <p className="explain">家庭相册操作：家庭相册>相机图标>分享</p>
        </WingBlank>
      </section>
      <section>
        <PhoneContent>
          <img className={'phone-within'} src={'../static/images/assistance-2.gif'} />
        </PhoneContent>
        <WingBlank>
          <p className="explain">亲情协助操作：亲情协助>需要求助的家人头像>我要求助>接受>退出</p>
          <p className="explain">（亲情协助的同时，还可进行语音沟通哦）</p>
        </WingBlank>
      </section>
        </Layout>
      </div>
    )
  }
}
export default Index