import { Application as ComponentApplication } from '@boldgrid/components/src/app/js/main.js';
import { ColorPalette, StyleUpdater, ColorPaletteSelection, PaletteConfiguration, Padding, Margin } from '../controls';
import '@boldgrid/components/src/app/scss/main.scss';
import './main.scss';

export class Application {

	/**
	 * Initialize the app used for testing.
	 *
	 * @since 1.0.0
	 */
	init() {
		this.paletteConfig = new PaletteConfiguration();

		new ComponentApplication().init();

		// Instantiate the css loader.
		this.styleUpdater = new StyleUpdater( document );
		this.styleUpdater.setup();

		this.renderControls();
	}

	/**
	 * Create the controls.
	 *
	 * @since 1.0.0
	 */
	renderControls() {
		this.paletteCustomize();
		this.paletteSelection();
		this.directionControl();
	}

	directionControl() {
		let $tab = $( '.directional-control' ),
			$paddingControl = $tab.find( '.padding-control' ),
			$marginControl = $tab.find( '.margin-control' ),
			padding = new Padding( {
				target: $paddingControl.find( '.test-case p' )
			} ),
			margin = new Margin( {
				target: $marginControl.find( '.test-case p' )
			} );

		$paddingControl.find( '.control' ).html( padding.render() );
		$marginControl.find( '.control' ).html( margin.render() );
	}

	paletteSelection() {
		let $tab = $( '.palette-selection-tab .control' ),
			$log = $( '.palette-selection-tab .log' ),
			paletteSelection = new ColorPaletteSelection(),
			$control = paletteSelection.create();

		$tab.html( $control );

		$control.on( 'palette-selection', ( e, data ) => {
			let logData = {
				colors: data.palette,
				time: new Date().getTime()
			};

			$log.append( '<div class="log-line">' + JSON.stringify( logData ) + '</div>' );
		} );
	}

	paletteCustomize() {
		let $control,
			$tab = $( '.colors-tab' ),
			colorPalette = new ColorPalette();

		//TestData = require( '../../test/data/palette-source-1.json' );

		colorPalette.init();

		$control = colorPalette.render( $tab.find( '.control' ) );

		$control.on( 'sass_compiled', ( e, data ) => {
			this.styleUpdater.update( {
				id: 'bg-controls-colors',
				css: data.result.text,
				scss: data.scss
			} );

			if ( BOLDGRID.COLOR_PALETTE.Modify.state  ) {
				let savableState = this.paletteConfig.createSavableState( BOLDGRID.COLOR_PALETTE.Modify.state );
				console.log( 'State', savableState );
				console.log( 'State', JSON.stringify( savableState ) );
			}

			$tab.find( '.css .content' ).html( data.result.text );
			$tab.find( '.scss .content' ).html( data.scss );
		} );
	}
}
