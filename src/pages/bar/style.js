import styled from 'styled-components';

export const BarWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
  .list{
    position:absolute;
    background-color: #373737f0;
    height:250px;
    width:200px;
    right:223px;
    bottom:46px;
    border-radius:7px 7px 0px 0px;

    color:#fff;
    
  }
  .list-item{
    display:flex;
    align-items: center;

    height:30px;
  }
  .list-item-index{
    text-align:center;
    width:35px
  }
  .list-item-item{
    width:150px
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isplay ? "-165px" : "-204px"};
  }

  .next {
    background-position: -80px -130px;
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info { 
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-66px -248px"
      case 2:
        return "-66px -344px"
      default:
        return "-3px -344px"
    }
  }};
    }

    .playlist {
      width: 23px;
      background-position: -42px -68px;
    }
  }
`
