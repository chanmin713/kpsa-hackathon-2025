import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7); /* 반투명 흰 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* 최상단 */
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top: 4px solid #333;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
