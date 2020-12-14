import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({children}) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 필요없음
  const {isLoggedIn} = useSelector((state) => state.user); // 바뀌면 알아서 이 컴포넌트가 리렌더됨
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item><SearchInput enterButton /></Menu.Item>
        <Menu.Item><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}><a href="http://minkyung.kr" target="_blank" rel="noreferrer noopener"/></Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,

}

export default AppLayout;