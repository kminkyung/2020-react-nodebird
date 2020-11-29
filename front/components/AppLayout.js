import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({children}) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item><Input.Search enterButton style={{verticalAlign: 'middle'}}/></Menu.Item>
        <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6} />
        <Col xs={24} md={12} />
        <Col xs={24} md={6} />
      </Row>
      {children}
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,

}

export default AppLayout;