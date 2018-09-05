export { ColorPalette } from './color';
export { Selection as ColorPaletteSelection } from './color';
export { Config as PaletteConfiguration } from './color';
export { Control as DeviceVisibility } from './device-visibility';
export { SassCompiler } from './style';
export { Padding } from './padding';
export { Border } from './border';
export { Margin } from './margin';
export { BorderRadius } from './border-radius';
export { BoxShadow } from './box-shadow';
export { Slider } from './slider';
export { Animation } from './animation';
export { Control as Typography } from './typography';
export { Updater as StyleUpdater } from './style';
export { WebFont } from './typography/family/webfont';
export { Carousel } from './carousel';

export default {
	Color: require( './color' ),
	Style: require( './style' ),
	Padding: require( './padding' )
};
