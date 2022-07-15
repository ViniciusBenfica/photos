import { styled } from './stitches.config'
import { css } from '@stitches/react';
import { sky, skyDark, skyDarkA } from '@radix-ui/colors';

export const Body = styled('div', {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    width: "1300px",
    rowGap: "20px",
    margin: "auto",
    justifyItems: "center",
    // background: "red"
  })
  
export const DivImagens = styled('div', {
  background: skyDark.sky1,
  color: sky.sky1,
  width: "270px",
  height: "270px",
  borderRadius: "10px",
  overflow: "hidden",
})

export const Filter = styled('div', {
  display: "flex",
  margin: "auto",
  marginBottom: "20px",
  justifyContent: "space-evenly",
  width: "1300px"
})

export const box = css({})