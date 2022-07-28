import { styled } from './stitches.config'
import { css } from '@stitches/react';
import { sky, skyDark, skyDarkA } from '@radix-ui/colors';

export const Body = styled('div', {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  width: 1300,
  rowGap: 30,
  margin: "auto",
  justifyItems: "center",
  // background: "red"
})

export const DivImagens = styled('div', {
  background: skyDark.sky1,
  color: sky.sky1,
  width: 290,
  height: 290,
  borderRadius: 10,
  overflow: "hidden",

  '&:hover': {background: skyDark.sky3}
})

export const Title = styled('div', {
  margin: "auto",
})
  

export const box = css({})