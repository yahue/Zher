import React, { Component, View, Text, ScrollView } from 'react-native';
import Tabbar, { Tab, RawContent, IconWithBar, glypyMapMaker } from 'react-native-tabbar';

import ScrollViewSimpleExample from './scrollviewsimple';

const glypy = glypyMapMaker({
  Home: 'e900',
  Camera: 'e901',
  Stat: 'e902',
  Settings: 'e903',
  Favorite: 'e904'
});

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = false;
  }

  componentDidMount() {
    // let toggle = "tab2";
    // setInterval(() => {
    //   console.log(`goto ${toggle}`);
    //   this.refs['myTabbar'].gotoTab(toggle);
    //   toggle = toggle == "tab2"? "tab3" : "tab2";
    // }, 1000);
    //
    //
    //
    // let toggleShow = true;
    // setInterval(() => {
    //   toggleShow = !toggleShow;
    //   this.refs['myTabbar'].getBarRef().show(toggleShow);
    // }, 200);


    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab('tab2');
    // }, 2000);
    //
    // setTimeout(() => {
    //   this.refs['myTabbar'].gotoTab("tab3");
    // }, 4000);
  }

  tabbarToggle() {
    this.refs['myTabbar'].getBarRef().show(this.toggle);
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <Tabbar ref="myTabbar" barColor={'gray'}>
        <Tab name="home">
          <IconWithBar label="新闻" type={glypy.Home} from={'icomoon'}/>
          <RawContent>
          <ScrollViewSimpleExample>
          </ScrollViewSimpleExample>
           
          </RawContent>
        </Tab>
        <Tab name="camera">
          <IconWithBar label="服务" type={glypy.Camera} from={'icomoon'}/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('camera')}>发现附近精彩内容都在这里</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="stats">
          <IconWithBar label="淘城" type={glypy.Stat} from={'icomoon'}/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('stats')}>来一发这儿的精彩内容</Text>
            </View>
          </RawContent>
        </Tab>
        <Tab name="favorite">
          <IconWithBar label="发现" type={glypy.Favorite} from={'icomoon'}/>
          <RawContent>
            <MyLongScrollView/>
          </RawContent>
        </Tab>
        <Tab name="settings">
          <IconWithBar label="我的" type={glypy.Settings} from={'icomoon'}/>
          <RawContent>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent:'center' }}>
              <Text onPress={()=>console.log('settings')}>我的信息 设置灯</Text>
            </View>
          </RawContent>
        </Tab>
      </Tabbar>
    );
  }
}


class MyLongScrollView extends Component {
  constructor(props, context) {
    super(props, context);
  }

  generateContents() {
    let contents = [];
    for (let i = 0; i < 200; i++) {
      contents.push(
        <Text key={i}>啥都有啥都有 {i}</Text>
      );
    }

    return contents;
  }

  onScroll(e) {
    const {
      nativeEvent: {
        contentOffset: { y }
      }
    } = e;

    const { getBarRef } = this.context;
    //getBarRef().setBarHeight(y);
  }

  render() {
    return (
      <ScrollView
        onScroll={this.onScroll.bind(this)}
        scrollEventThrottle={16}
        style={{ flex: 1}}
        contentContainerStyle={{ alignItems: 'center' }}>
        {this.generateContents()}
      </ScrollView>
    );
  }
}

MyLongScrollView.contextTypes = {
  getBarRef: React.PropTypes.func
};
