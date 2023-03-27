import {
  Breakpoints,
  ColorValuesLightTheme,
  ColorValuesThemeAgnostic,
} from '@/types/app.types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root, html, body {
	--wjt-color-least-prominent: ${ColorValuesLightTheme['color-least-prominent']};
	--wjt-color-most-prominent: ${ColorValuesLightTheme['color-most-prominent']}; 
	--wjt-color-accent: ${ColorValuesThemeAgnostic['color-accent']};
	--wjt-color-stroke-least-prominent: ${ColorValuesLightTheme['stroke-least-prominent']};

	background-color: var(--wjt-color-most-prominent);
	color: var(--wjt-color-stroke-least-prominent);

	--wjt-typography-display: 'Manrope';
	--wjt-typography-body: 'Roboto Condensed';

 --wjt-typography-font-weight-xbold: 800;

	font-family: var(--wjt-typography-body), sans-serif;
	font-weight: 300;
	font-size: 18pt;

	box-sizing: border-box;
}

:root, html, body, body > main:first-child,
div#__next,
div#__next > div {
	height: 100%;
}

footer {
	position: absolute;
	bottom: 0;
	width: 100%;
}

h1,h2,h3,h4,h5,h6{
	font-family: var(--wjt-typography-display);
	font-weight: var(--wjt-typography-font-weight-xbold);
	text-transform: uppercase;
}

h1{
	font-size: 3rem;
}

h2 {
	font-size: 2.75rem;
}

h3{
	font-size: 2.5rem;
}

h4{
	font-size: 1.5rem;
}

h5{
	font-size: 1rem;
}

h6{
	font-size: .75rem;
}
`;

export default GlobalStyle;
