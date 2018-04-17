/**
 *@compontents 腾讯组件
  @option 参数说明
  @appid   腾讯视频为业务侧分配的 appid 号，用于统计，如果腾讯视频未分配，可以不填
  @oid   广告订单 id
  @pic   默认图片
  @playerid   播放器 id，不指定的话系统会自动分配一个，一般不需要配置
  @playerType   播放器类别
  @autoplay   是否自动播放
  @type   播放器类别
  @typeId   分类 id
  @video   默认的视频对象
  @coverId   专辑 id
  @libpath   统一播放器框架的存放路径
  @modId   默认的 DOM 元素 ID
  @width   默认宽度，单位像素
  @height   默认高度，单位像素
  @html5FeatureExtJS   HTML5UI?组件功能异步加载 JS 配置，有些组件由于不是必须，而代码量又很大，所以采用按需加载 配置是 JSON 格式，key 是组件名，value 是异步加载的 JS 文件路径
  @html5ForbiddenUIFeature
  @  HTML5 播放器 UI 需要关闭的功能，跟上述的配置相反，这里列出的功能就不会展现
  @html5LiveUIFeature   HTML5 直播播放器 UI 组件
  @html5Preload   Html5 播放器 preload 属性(暂不启用)
  @isHtml5AutoBuffer   Html5 播放器是否使用 autobuffer 属性参数名称 支持的平台 描述
  @isHtml5ControlAlways Show   HTML5 播放器是否一直显示控制栏
  @isHtml5ShowPlayBtnOn Pause   暂停的时候是否显示播放按钮
  @isHtml5ShowPosterOnChange   HTML5 播放器切换视频的时候是否要显示 Poster
  @isHtml5ShowPosterOnEnd   HTML5 播放器播放完毕是否显示 poster
  @isHtml5ShowPosterOnStart   HTML5 播放开始的时候是否显示 poster
  @isHtml5UseAirPlay   Html5 播放器是否使用 Airplay 功能，强烈建议开启
  @isHtml5UseFakeFullScreen   是否强制使用伪全屏
  @isHtml5UseUI   HTML5 播放器是否使用自设计的控制栏
  @isiPhoneShowPosterOnPause   iPhone 在暂停的时候是否显示 Poster 层
  @isiPhoneShowPlaysinline   iPhone 是否开启小窗播放(目前只有微信支持)
  @plugins   使用插件列表，如果配置在这里那么会在 write 之后自动调用这里列出的插件 当然，用户自己写的插件也可以不用列在这里，直接在外部调用 player.
  @pluginUrl   插件 JS 存放路径，key 是插件名，value 是插件的 JS 路径，跟下面的 libpath 组合 成完成的 URL 地址 如果定义了这里的路径，那么会异步加载，否则会探测当前页面是否有对应的 build+插件名的函数
  @isContinuePlay   是否续播，默认 true
  @isLive ShowCfg   直播播放器是否显示配置菜单
  @isLive ShowConfigBtn   直播播放器是否显示设置按钮
  @ Wmode     播放器的 wmode
  @isLive ShowFullB  直播播放器是否显示全屏按钮参数名称 支持的平台 描述
  @isVod ShowCfg     点播播放器是否出现设置按钮
  @isVod ShowEnd     点播播放器播放结束出现结束推荐
  @isVod ShowNextBtn    点播播放器是否出现“下一个视频”按钮isVod ShowSearchBar
  @share   是否显示分享
  @vod ExtVars     点播播放器扩展  vars 参数
  @vod ListType   点播   播放器 listtype 参数
  @vod Type     点播播放器类型
  @vod Url     点播播放器地址
  @volume   默认音量
  */
import React from 'react';
import Head from 'next/head'

class TxVideo extends React.Component {
  constructor(props) {
    super(props)
    let options = {
      vid: props.vid,
      height: props.height || '100%',
      width: props.width || '100%',
      id: `tx-video-${this.props.vid}`,
      ...props.option
    }
    this.state = {
      options
    }
  }
  create() {
    if(!window.tvp){
      setTimeout(()=>{
        this.create()
      },200)
      return
    } else {
      var video = new tvp.VideoInfo()
      var player = new tvp.Player();
      video.setVid(this.state.options.vid);
      player.create({
        video: video,
        modId: this.state.options.id,
        ...this.state.options
      });
    }
    
  }
  componentDidMount() {
    this.create()
  }
  render() {
    return (
      <div>
        <Head>
          <script src={'http://imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2.js'}></script>
        </Head>
        <div style={{'minHeight':200}} id={this.state.options.id}></div>
        <style jsx global>
          {`
          .tenvideo_player  video {
            min-height:200px;
            top:0 !important;
            position: relative !important;
          }
          `}
        </style>
      </div>
    )
  }

}

export default TxVideo