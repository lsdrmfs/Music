import styled from 'styled-components';

export const BannerWrap = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    height: 359.25px;

    display: flex;
    position: relative;
  }

`

export const BannerCenter = styled.div`
  width: 970px;

  .banner-item {
    overflow: hidden;
    height: 359.25px;
    .image {
      width: 100%;
    }
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
