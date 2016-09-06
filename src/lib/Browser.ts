import {UAParser} from "ua-parser-js";

export class Browser {

	protected _parser = new UAParser();

	public userAgent:string = '';

	/**
	 * @property {string} platform
	 */
	public platform:string;

	/**
	 * @property {string} name
	 */
	public name:string;

	/**
	 * @property {number} version
	 */
	public version:number;

	/**
	 *
	 * @type {boolean} ie
	 */
	public ie:boolean = false;



	/**
	 *
	 * @type {boolean}
	 */
	public chrome:boolean = false;


	/**
	 *
	 * @type {boolean}
	 */
	public androidBrowser:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public firefox:boolean = false;


	/**
	 *
	 * @type {boolean}
	 */
	public ios:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public tablet:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public mobile:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public phone:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public desktop:boolean = false;

	/**
	 *
	 * @type {boolean}
	 */
	public android:boolean = false;

	protected _isTablet:boolean = null;
	protected _hasWebGL:boolean = null;
	protected _hasAutoPlaySupport:boolean = null;

	constructor(userAgent:string = navigator ? navigator.userAgent || navigator.vendor || window['opera'] : '')
	{
		this.setUserAgent(userAgent);
	}

	public setUserAgent(userAgent:string):void
	{
		this.userAgent = userAgent;
		this._parser.setUA(userAgent);

		var result = this._parser.getResult();

		if(!result.browser)
		{
			result.browser = <any> {}
		}

		if(!result.browser.name)
		{
			result.browser.name = 'unknown';
		}

		if(result.browser.version == void 0)
		{
			result.browser.version = '0';
		}

		switch(true)
		{
			case result.browser.name == 'Chromium':
			case result.browser.name == 'Chrome':{
				this.name = 'chrome';
				break;
			}

			case result.browser.name == 'Firefox': {
				this.name = 'firefox';
				break;
			}

			case /Safari/.test(result.browser.name):
			{
				this.name = 'safari';
				break;
			}

			case /Android/.test(result.browser.name):
			{
				this.name = 'android';
				break;
			}

			case result.browser.name == 'IE': {
				this.name = 'ie';
				break;
			}

			case result.browser.name == 'Edge': {
				this.name = 'edge';
				break;
			}

			case /Opera/.test(result.browser.name): {
				this.name = 'opera';
				break;
			}

			default: {
				this.name = result.browser.name.toLowerCase().trim();
				break;
			}
		}

		this.version = parseInt(result.browser.version.split('.').shift(), 10);

		if(!result.os)
		{
			result.os = <any> {}
		}

		if(!result.os.name)
		{
			result.os.name = 'unknown';
		}

		switch(true)
		{
			case result.os.name == 'Android':{
				this.platform = 'android';
				break;
			}

			case result.os.name == 'iOS': {
				this.platform = 'ios';
				break;
			}

			case result.os.name == 'Mac OS': {
				this.platform = 'mac';
				break;
			}

			case /Windows/.test(result.os.name): {
				this.platform = 'windows';
				break;
			}

			default: {


				this.platform = result.os.name.toLowerCase();
				break;
			}
		}

		if(this.platform == 'ios')
		{
			this.ios = true;
		}

		if(this.platform == 'android')
		{
			this.android = true;
		}

		if(this.name == 'ie')
		{
			this.ie = true;
		}

		if(this.name == 'chrome')
		{
			this.chrome = true;
		}

		if(this.name == 'firefox')
		{
			this.firefox = true;
		}

		if(this.platform == 'ios' || this.platform == 'android')
		{
			this.mobile = true;

			if(result.device.type == 'tablet')
			{
				this.tablet = true;
			} else {
				this.phone = true;
			}
		}

		if(this.android && !this.chrome)
		{
			this.androidBrowser = true;
		}
	}

	/**
	 * @method isIPad
	 * @returns {boolean}
	 */
	public isIPad():boolean
	{
		return !!this.userAgent.match(/iPad/i);
	}

	/**
	 * @method isIPhone
	 * @returns {boolean}
	 */
	public isIPhone():boolean
	{
		return !!this.userAgent.match(/iPhone/i);
	}

	/**
	 * Will return true if basic webgl is supported
	 *
	 * @returns {boolean}
	 */
	public hasWebGL():boolean
	{
		if(this._hasWebGL === null)
		{
			var canvas = document.createElement('canvas');
			var gl = null;
			try { gl = canvas.getContext("webgl"); }
			catch (x) { gl = null; }

			if (gl == null) {
				try { gl = canvas.getContext("experimental-webgl"); }
				catch (x) { gl = null; }
			}

			this._hasWebGL = gl !== null ? true : false;
		}

		return this._hasWebGL;
	}

	/**
	 * Will return true if basic webgl is supported
	 *
	 * @returns {boolean}
	 */
	public hasMediaAutoplay(callback:(result:boolean) => any):void
	{
		if(this._hasAutoPlaySupport === null)
		{
			try {
				var audio:HTMLAudioElement = document.createElement('audio');
				// var src = audio.canPlayType('audio/mp3') ? ogg : mp3;
				audio.autoplay = true;
				audio.volume = 0;

				// this will only be triggered if autoplay works
				audio.addEventListener('play', () => {
					this._hasAutoPlaySupport = true;
					callback(this._hasAutoPlaySupport);
				})

				var audioString = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq';
				audio.src = audioString;

				setTimeout(() => {
					if(this._hasAutoPlaySupport === null)
					{
						this._hasAutoPlaySupport = false;
					}

					callback(this._hasAutoPlaySupport);
				}, 500);

			} catch(e) {

			}
		} else {
			callback(this._hasAutoPlaySupport);
		}

	}
}
