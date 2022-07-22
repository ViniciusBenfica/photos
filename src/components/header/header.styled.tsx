import { styled } from '../../styles/stitches.config'
import { css } from '@stitches/react';
import { sky, skyDark, skyDarkA } from '@radix-ui/colors';

export const Body = styled('div', {
    display: "flex",
    width: "100%",
    height: "100px",
    justifyContent: "space-around",
    background: "red",
    alignItems: "center"
  })

export const Button = styled('div', {
    width: "150px",
    height: "30px",
    justifyContent: "space-around",
    background: "blue"
})

export const box = css({})