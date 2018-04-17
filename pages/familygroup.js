import React from 'react';
import Layout from '../compontents/layout'
import {WingBlank} from 'antd-mobile';
import PhoneContent from '../compontents/PhoneContent'

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Layout headerTitle={'家人圈'} hasHeader={true}>
          <p className="title">健康屏</p>
          <img className="title-img" src={'../static/images/health_icon-49.png'}/>
          <WingBlank>
            <p className="sub-title">V1S手机您的专属健康守门人，负一屏的健康屏，共包含一键看医生/专家挂号/病例档案/健康检测四项服务。小病线上问诊，处方开药，送药上门实现全流程服务闭环；大病线上挂号，名医推荐，轻松解决看病难问题。另外还有健康检测数据归档，异常数据监测回访等贴心服务。</p>
          </WingBlank>
          <section>
          <p className="title">详细分步骤讲解</p>
          <PhoneContent>
            <img className={'phone-within'} src={'../static/images/doctor1-2.gif'} />
          </PhoneContent>
          <WingBlank>
            <p className="explain">线上问诊操作：健康屏>一键看医生>选择问题类型>链接就近家庭医生服务基地</p>
            <p className="explain">（长按手机健康键 2 秒也可进行一键看医生）</p>
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
        <p className="title">详细分步骤讲解</p>
        <PhoneContent>
          <img className={'phone-within'} src={'../static/images/doctor1-2.gif'} />
        </PhoneContent>
        <WingBlank>
          <p className="explain">线上问诊操作：健康屏>一键看医生>选择问题类型>链接就近家庭医生服务基地</p>
          <p className="explain">（长按手机健康键 2 秒也可进行一键看医生）</p>
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
        </Layout>
      </div>
    )
  }
}
export default Index