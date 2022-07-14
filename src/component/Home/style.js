/*
    ===============================
             Styles
    ===============================
*/

import styled from 'styled-components';

export const HomePage = styled.div`
  padding-top: 50px;
`

export const Image = styled.img`
  height: 100%;

  @media (max-width: 767.98px) { 
    height: 60vh;
  }
  
  @media (max-width: 991.98px) { 
    height: 60vh;
  }
`

export const ImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  background-color: rgba(19, 19, 19, 0.5);
`

export const Title = styled.h5`
  font-weight: bolder;
`

