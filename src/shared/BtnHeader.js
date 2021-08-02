import React from 'react';
import {Grid, Text} from '../elements';
//이모지
import { BiChevronLeft } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
//history
import {history} from '../redux/configStore';

const BtnHeader = (props) => {

  return (
    <React.Fragment>
      <Grid is_flex padding="8% 20px">
        {/* 뒤로가기 버튼 */}
        <Grid width="7%" _onClick={() => history.goBack()}>  
          <BiChevronLeft size="30px"/>
        </Grid>
        {/* 페이지 이름 */}
        <Text bold size="15px" width="auto">{props.title}</Text>
        {/* 장바구니 이모지 유무 */}
        {props.display !== 'none' ? 
        <Grid width="10%" _onClick={() => history.push('/cart')}>
          <FiShoppingCart size="30px"/>
        </Grid> : <Grid width="7%"/>}
      </Grid>
    </React.Fragment>
  );
}

export default BtnHeader;