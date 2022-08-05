import SfProWoff2 from '../assets/fonts/regular.woff2'
import SfProWoff2Bold from '../assets/fonts/bold.woff2'
import SfProWoff2SemiBold from '../assets/fonts/semibold.woff2'
import SfProWoff2Thin from '../assets/fonts/thin.woff2'
import SfProTTFBlack from '../assets/fonts/black.ttf'

export const fontsImport = `@font-face {
  font-family: 'SfPro';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url(${SfProWoff2}) format('woff2');
}
@font-face {
  font-family: 'SfPro';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: url(${SfProWoff2Bold}) format('woff2');
}
@font-face {
  font-family: 'SfPro';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: url(${SfProWoff2SemiBold}) format('woff2');
}
@font-face {
  font-family: 'SfPro';
  font-style: normal;
  font-display: swap;
  font-weight: 300;
  src: url(${SfProWoff2Thin}) format('woff2');
}
@font-face {
  font-family: 'SfPro';
  font-style: normal;
  font-display: swap;
  font-weight: 900;
  src: url(${SfProTTFBlack}) format('truetype');
}`
