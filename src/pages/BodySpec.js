import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { history } from '../redux/configStore';

import styled from 'styled-components';
import { Grid, Button, Text } from '../elements';

import { ProfileDefault, Camera, Go } from '../img/svg';

import { _logOut } from '../redux/modules/user';

// helmet
import {Helmet} from 'react-helmet';

/** 
 * @param {*} props
 * @returns 마이 페이지
 * @역할 마이 페이지
 * @필수값 이 컴포넌트를 사용할 때 필수 props
 * @담당자 : 성수
*/

const BodySpec = (props) => 
{
  const dispatch = useDispatch();
  const is_login = useSelector(state=>state.user.is_login);
  const user_info = useSelector(state=>state.user.user_info);
  const {gender, age, height, weight} = user_info;
  console.log(gender&&age&&height&&weight?"":1);
  // if(gender&&age&&height&&weight===){
  //   console.log("df");
  // }
  // 바디스펙 blind 정보
  const bodySpec = useSelector(state=>state.dashboard.specBlind);

  const logout = () => {
    dispatch(_logOut(bodySpec));
  }

  if(!is_login){
  return (
    <React.Fragment>
      {/* 헬멧 */}
      <Helmet>
        <title>[Calog] 칼로그 로그인/회원가입</title>
        <meta property="og:title" content="[Calog] 칼로그 로그인/회원가입"/>
        <meta property="og:description" content="로그인/회원가입 후 칼로그를 이용해보세요!" />
        <meta property="og:image" content="%PUBLIC_URL%/icons/helmet.png" />
      </Helmet>

      <Container>
      <Profile>
          {ProfileDefault}
          </Profile>
          
          <Bottombg>
            <hr color="#FFE899"/>

            <div onClick={()=>{history.push("/signsocial")}}>
              <Grid display="flex">
                <Text
                m_size="28px"
                bold
                lineheight="34px"
                size="28px"
                margin="92px 0px 16px 24px">
                  <Tag>
                    회원가입/로그인하기
                  </Tag>
                </Text>
                <Text margin="92px 0px 16px 0px">
                  {Go}
                </Text>
              </Grid>
            </div>

            <Text
            lineheight="22px"
            size="17px"
            color="#8C8C8C"
            margin="24px 0px 24px 24px">
              회원이 되어 칼로리스 서비스를 <br/> 자유롭게 이용해보세요!
            </Text>
            <hr color="#F5F5F5"/>
            <Text
            lineheight="22px"
            size="17px"
            color="#000000"
            margin="24px 0px 24px 20px">
              <Tag onClick={()=>
                {
                  history.push("/notice")
                }}>공지사항
              </Tag>
            </Text>
            <hr color="#F5F5F5"/>
            <Text
            lineheight="22px"
            size="17px"
            color="#000000"
            margin="24px 0px 24px 20px">
              <Tag onClick={()=>
                {
                  history.push("/alam")
                }}>알림
              </Tag>
            </Text>
            {/* <hr color="#F5F5F5"/>
            <Text
            lineheight="22px"
            size="17px"
            color="#000000"
            margin="24px 0px 24px 20px">
              <Tag onClick={()=>
              {
                history.push("/userfeedback")
              }}>
                의견 보내기
              </Tag>
            </Text> */}
            <hr color="#F5F5F5"/>
            <Version>
              <Text
              lineheight="22px"
              size="17px"
              color="#A9A9A9"
              margin="15px 0px 15px 20px">
                현재 버전
              </Text>
              <Text
              size="17px"
              margin="17px 20px 15px 0px"
              color="#F19F13">
                V1.0.0
              </Text>
            </Version>
            <hr color="#F5F5F5"/>
          </Bottombg>
      </Container>
    </React.Fragment>
  );
}
return (
  <React.Fragment>
    {/* 헬멧 */}
    <Helmet>
      <title>[Calog] 마이페이지</title>
      <meta property="og:title" content="[Calog] 마이페이지"/>
      <meta property="og:description" content="공지사항, 알림, 의견 보내기를 할 수 있어요!" />
      <meta property="og:image" content="%PUBLIC_URL%/icons/helmet.png" />
    </Helmet>

    <Container>
    <Profile>
        {ProfileDefault}
    </Profile>
    {/* <Cameradiv>
    {Camera}
    </Cameradiv> */}
        <Bottombg>
          <hr color="#FFE899"/>
          <Text
          m_size="23px"
          bold
          lineheight="34px"
          size="28px"
          margin="92px 0px 16px 42px">
            {user_info?.nickname}
          </Text>

        <BodyBox>
          <Text margin="30px">
            신체 정보를 등록하고<br/> 나의 기초대사량을 알아보세요!
          </Text>
          <Button
          border_radius="12px"
          bg="#FFE899"
          width="80%"
          height="56px"
          _onClick={()=>
            {
              history.push("/addspec")
            }}>
            <Text
            lineheight="22px"
            size="16px"
            bold>
              {gender&&age&&height&&weight?"신체정보 수정하기":"신체정보 등록하기"}
            </Text>
          </Button>
        </BodyBox>

          <hr color="#F5F5F5"/>
          <Text
          lineheight="22px"
          size="17px"
          color="#000000"
          margin="24px 0px 24px 20px">
            <Tag onClick={()=>
              {
                history.push("/notice")
              }}>
                공지사항
            </Tag>
          </Text>
          <hr color="#F5F5F5"/>
          <Text
          lineheight="22px"
          size="17px"
          color="#000000"
          margin="24px 0px 24px 20px">
            <Tag onClick={()=>
              {
                history.push("/alam")
              }}>
              알림
            </Tag>
          </Text>
          <hr color="#F5F5F5"/>
          <Text
          lineheight="22px"
          size="17px"
          color="#000000"
          margin="24px 0px 24px 20px">
                <Tag onClick={()=>
              {
                history.push("/userfeedback")
              }}>
              의견 보내기
            </Tag>
          </Text>
          <hr color="#F5F5F5"/>

          <Version>
            <Text
            lineheight="22px"
            size="17px"
            color="#A9A9A9"
            margin="15px 0px 15px 20px">
              현재 버전
            </Text>
            <Text
            size="17px"
            margin="17px 20px 15px 0px"
            color="#F19F13">
              V1.0.0
            </Text>
          </Version>
          <hr color="#F5F5F5"/>
          <div onClick={logout}>
            <Text
            lineheight="22px"
            size="17px"
            color="#A9A9A9"
            margin="24px 0px 24px 20px">
              <Tag>
                로그아웃
              </Tag>
            </Text>
          </div>
          <hr color="#F5F5F5"/>
          <br/>
        </Bottombg>
      </Container>
    </React.Fragment>
  );
}


export default BodySpec;

const Container = styled.div`
  padding-top: 120px;
  height: 100%;
  width: 100%;
  background-color: #FFE999;
`;

const Bottombg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  margin-top: -18%;
  @media only screen and (max-width: 400px){
    margin-top: -20%;
  height: 100%;
  }
`;

const Profile = styled.div`
  margin-top: -14%;
  margin-left: 20px;
  @media only screen and (max-width: 320px){
    margin-top: -22%;
    
  }

`;

const Version = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BodyBox = styled.div`
  width: 80%;
  height: 170px;
  margin: auto;
  margin-bottom: 32px;
  background-color: rgba(255, 232, 153, 0.2);
  border: 1px solid #FFE899;
  border-radius: 12px;
`;

const Cameradiv = styled.div`
  position: absolute;
  margin: 30px 0px 0px 110px;
`;

const Tag = styled.a`
  &:hover{
    cursor: pointer;
  }
`;