import React from 'react'
// css
import '../../styles/Header/StatCard.css' 
// images
import ArrowUp from '../../assets/arrow-up.png'
import { Container,Row,Col } from 'react-bootstrap'
const StatsCard = (props) => {

  return (
    <Container className='statcard_three'>
      <Row>
        <Col lg={3} >
    <div style={props.inCard}  className='card_container'>
        <div className='card_top'>
            <div className='card_stat_img'><img src={props.img} alt="" /></div>
            <div className='card_title'>{props.title}</div>
        </div>
        <div className='card_bottom'>
            <span className='card_total'>{props.patient}</span>
            <div className='card_sub_stats'>
                <div className='card_stat_ratio'><img src={ArrowUp} alt="" />{props.ratio}</div>
                <span className='card_stat_week'>This Week</span>
            </div>
        </div>
    </div>
     </Col>
     </Row>
     </Container>
  )
}

export default StatsCard