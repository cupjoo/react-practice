import React, { Component } from 'react'
import PhoneInfo from './PhoneInfo'

export default class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn('onRemove not defined'),
    onUpdate: () => console.warn('onUpdate not defined')
  }

  // 변화 발생 부분만 감지
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    const { data, onRemove, onUpdate } = this.props
    const list = data.map(
      // data를 JSX로 변환
      info => (
        <PhoneInfo 
          key={info.id} 
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )
    )
    return (
      <div>
        { list }
      </div>
    )
  }
}
