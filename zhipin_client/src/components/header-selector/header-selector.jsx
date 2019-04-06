/** 
 * 选择用户头像的UI组件
 */

import React, {Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelect extends Component {
  static propTypes = {
    setHeader: PropTypes.func.isRequired
  }

  state = {
    icon: null // 图片对象，默认没有值
  }
  
  constructor (props) {
    super(props)
    this.headerList = []
    for (let index = 1; index < 21; index++) {
      this.headerList.push({
        text: `头像${index}`,
        icon: require(`./images/头像${index}.png`)
      })
    }
    console.log(this.headerList)
  }

  handleClick = ({text, icon}) => {
    // 更新组件状态
    this.setState({icon})

    // 调用函数更新父组件状态
    this.props.setHeader(text)
  }

  render () {
    const {icon} = this.state
    const listHeader = !icon ? '请选择头像' : (
      <div>已选择头像:<img src={icon} alt=''/></div>
    )
    return (
      <List renderHeader={() => listHeader}>
        <Grid data={this.headerList}
          onClick={this.handleClick}
          columnNum={5}/>
      </List>
    )
  }
}
