/**
 * @compontents 手机容器组件
 * @creator gaolu@halove.com
 */
import React from 'react';

class PhoneContent extends React.Component {
  constructor(props){
    super(props)
    this.imgSrc = props.src ||  '../../static/images/halove-304.png'
  }
  render () {
    return(
      <div className="phone-content">
        <img src={this.imgSrc}/> 
        <div className="children-content">{this.props.children}</div>
        <style jsx>
        {`
          .phone-content{
            position: relative;
          }
          img{
            width:100%;
          }
          .children-content{
            position: absolute;
            top:15%;
            left:10%;
            right:10%;
            bottom:0.5%;
            box-sizing: border-box;
          }
        `}
        </style>
      </div>
    )
  }
}

export default PhoneContent