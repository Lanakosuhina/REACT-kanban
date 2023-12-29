import styled, { createGlobalStyle, keyframes } from "styled-components";

export const fadeintext = keyframes`
  1% {
    color: #565eef;
    text-shadow: 0px 0px 4px #565eef;
  }

  70% {
    color: #ffa100;
    text-shadow: 0px 0px 14px #ffa100;
  }

  100% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }
`

export const flicker4 = keyframes`
  0% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  30% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  31% {
    color: #565eef;
    text-shadow: 0px 0px 4px #565eef;
  }

  32% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  36% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  37% {
    color: #565eef;
    text-shadow: 0px 0px 4px #565eef;
  }

  41% {
    color: #565eef;
    text-shadow: 0px 0px 4px #565eef;
  }

  42% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  85% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  86% {
    color: #565eef;
    text-shadow: 0px 0px 4px #565eef;
  }

  95% {
    color: #565eef;
    text-shadow: 0px 0px 4px #565eef;
  }

  96% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }

  100% {
    color: #ffa100;
    text-shadow: 0px 0px 4px #ffa100;
  }
`

export const flicker1 = keyframes`
  0% {
    stroke: #ffa100;
  }

  1% {
    stroke: transparent;
  }

  3% {
    stroke: transparent;
  }

  4% {
    stroke: #ffa100;
  }

  6% {
    stroke: #ffa100;
  }

  7% {
    stroke: transparent;
  }

  13% {
    stroke: transparent;
  }

  14% {
    stroke: #ffa100;
  }

  100% {
    stroke: #ffa100;
  }
`

export const flicker2 = keyframes`
  0% {
    stroke: #ffa100;
  }

  50% {
    stroke: #ffa100;
  }

  51% {
    stroke: transparent;
  }

  61% {
    stroke: transparent;
  }

  62% {
    stroke: #ffa100;
  }

  100% {
    stroke: #ffa100;
  }
`

export const flicker3 = keyframes`
  0% {
    stroke: #ffa100;
  }

  1% {
    stroke: transparent;
  }

  10% {
    stroke: transparent;
  }

  11% {
    stroke: #ffa100;
  }

  40% {
    stroke: #ffa100;
  }

  41% {
    stroke: transparent;
  }

  45% {
    stroke: transparent;
  }

  46% {
    stroke: #ffa100;
  }

  100% {
    stroke: #ffa100;
  }
`

export const drawline1 = keyframes`
  0% {
    stroke-dashoffset: -940px;
  }

  100% {
    stroke-dashoffset: 0px;
  }
`

export const drawline2 = keyframes`
  0% {
    stroke-dashoffset: -735px;
  }

  100% {
    stroke-dashoffset: 0px;
  }
`

export const drawline3 = keyframes`
  0% {
    stroke-dashoffset: -940px;
  }

  100% {
    stroke-dashoffset: 0px;
  }
`

export const huerotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(-120deg);
  }

  100% {
    filter: hue-rotate(0deg);
  }
`

export const GlobalStyleNotFound = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');

/* html,
body {
  margin: 0px;
  overflow: hidden;
} */

.wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#svgWrap_1,
#svgWrap_2 {
  position: absolute;
  height: auto;
  width: 600px;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#svgWrap_1,
#svgWrap_2,
div {
  animation: ${huerotate} 6s ease-in-out 3s infinite;
}

#id1_1,
#id2_1,
#id3_1 {
  stroke: #FFA100;
  stroke-width: 3px;
  fill: transparent;
  filter: url(#glow);
}

#id1_2,
#id2_2,
#id3_2 {
  stroke: #565eef;
  stroke-width: 3px;
  fill: transparent;
  filter: url(#glow);
}

#id3_1 {
  stroke-dasharray: 940px;
  stroke-dashoffset: -940px;
  animation: ${drawline3} 2.5s ease-in-out 0s forwards, ${flicker3} 4s linear 4s infinite;
}

#id2_1 {
  stroke-dasharray: 735px;
  stroke-dashoffset: -735px;
  animation: ${drawline2} 2.5s ease-in-out 0.5s forwards, ${flicker2} 4s linear 4.5s infinite;
}

#id1_1 {
  stroke-dasharray: 940px;
  stroke-dashoffset: -940px;
  animation: ${drawline1} 2.5s ease-in-out 1s forwards, ${flicker1} 4s linear 5s infinite;
}

`
export const PageDiv = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  margin: 0px;
  background: radial-gradient(circle, #fccd7c 0%, #a0a4fd 100%);
  overflow: hidden;
`
export const Text = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 150px;
  font-size: 32px;
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  display: block;
  color: #565eef;
  font-weight: 300;
  font-family: Audiowide;
  text-shadow: 0px 0px 4px #565eef;
  animation: ${fadeintext} 3s ease-in 3.5s forwards, flicker4 5s linear 7.5s infinite, hueRotate 6s ease-in-out 3s infinite;
`
