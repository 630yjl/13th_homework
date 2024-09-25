import React from 'react'
import './BoardsDetail.css'
import Carousel from 'react-bootstrap/Carousel';

const BoardsDetail = () => {
  return (
  <div className="container">

    <div className='bigTitleContainer'>
      <div className='bigTitle'>TRIP BLOG</div>
      <div className='subBigTitle'>여행 경험을 나누어보세요.</div>
    </div>

    <div className='contentContainer'>
      <div className='grid1'>
        <div className='imgContainer'>
          <Carousel>
            <Carousel.Item>
              <img src='/image/sampleimg2.jpg'  />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/image/sampleimg2.jpg' />
            </Carousel.Item>
            <Carousel.Item>
              <img src='/image/sampleimg2.jpg' />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='iconContainer'>
          <div className='locationContainer'>
            <div><img src='/image/location.png'/></div>
            <div><img src='/image/link.png'/></div>
          </div>

          <div className='goodBadContainer'>
            <div className='good'>
              <img src='/image/bad.png'/>
              <div>24</div>
            </div>

            <div className='bad'>
              <img src='/image/good.png'/>
              <div>30</div>
            </div>
          </div>
        </div>

        <div className='addressContainer'>
          <div className='address'>서울특별시 강남구 신논현로 111-6</div>
        </div>
        
        
      </div>
      
      <div className='textContainer'>
        <div className='aboutContent'>
          <div className='authorDateContainer'>
            <img src='/image/profile.png'/>
            <div className='authorName'>홍길동</div>
            <div className='date'>2024.11.11</div>
          </div>

          <div className="titleContainer">
            <div className="title">Post title1 </div>
          </div>
        </div>

        <div className='textContent'>
          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          너보다 시름 많은 나도 자고 일어나 우노라.
          얄리얄리 얄라셩 얄라리 얄라 <br/>

          갈던 밭 갈던 밭 보았느냐. 물 아래 갈던 밭 보았느냐
          이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
          얄리얄리 얄라셩 얄라리 얄라

          이럭저럭 하여 낮일랑 지내 왔건만
          올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
          얄리얄리 얄라셩 얄라리 얄라

          어디다 던지는 돌인가 누구를 맞히려던 돌인가.
          미워할 이도 사랑할 이도 없이 맞아서 우노라.
          얄리얄리 얄라셩 얄라리 얄라
          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          너보다 시름 많은 나도 자고 일어나 우노라.
          얄리얄리 얄라셩 얄라리 얄라 <br/>

          갈던 밭 갈던 밭 보았느냐. 물 아래 갈던 밭 보았느냐
          이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
          얄리얄리 얄라셩 얄라리 얄라

          이럭저럭 하여 낮일랑 지내 왔건만
          올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
          얄리얄리 얄라셩 얄라리 얄라

          어디다 던지는 돌인가 누구를 맞히려던 돌인가.
          미워할 이도 사랑할 이도 없이 맞아서 우노라.
          얄리얄리 얄라셩 얄라리 얄라
          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
          너보다 시름 많은 나도 자고 일어나 우노라.
          얄리얄리 얄라셩 얄라리 얄라 <br/>

          갈던 밭 갈던 밭 보았느냐. 물 아래 갈던 밭 보았느냐
          이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
          얄리얄리 얄라셩 얄라리 얄라

          이럭저럭 하여 낮일랑 지내 왔건만
          올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
          얄리얄리 얄라셩 얄라리 얄라

          어디다 던지는 돌인가 누구를 맞히려던 돌인가.
          미워할 이도 사랑할 이도 없이 맞아서 우노라.
          얄리얄리 얄라셩 얄라리 얄라
          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          살겠노라 살겠노라. 청산에 살겠노라.
          머루랑 다래를 먹고 청산에 살겠노라.
          얄리얄리 얄랑셩 얄라리 얄라

          우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
        </div>
      </div>
   </div>




   <div className='videoConatiner'>
      <div className='grayBox'>
        <img src='/image/Frame.png'/>
      </div>
   </div>

   <div className='buttonContainer'>
      <button className='gotoListButton'><img src='/image/list_icon.png'/>목록으로</button>
      <button className='gotoListButton'><img src='/image/edit_icon.png'/>수정하기</button>
   </div>




   <div>
    <div className='title'>Comment</div>
   </div>



    

  </div>
  )
}

export default BoardsDetail