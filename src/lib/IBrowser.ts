interface IBrowser {
	/**
	 * @property {string} userAgent
	 */
	userAgent:string;

	/**
	 * @property {string} platform
	 */
	platform:string;

	/**
	 * @property {string} name
	 */
	name:string;

	/**
	 * @property {number} version
	 */
	version:number;

	/**
	 *
	 * @type {boolean} ie
	 */
	ie:boolean;

	/**
	 *
	 * @type {boolean}
	 */
	chrome:boolean;

	/**
	 *
	 * @type {boolean}
	 */
	firefox:boolean;


	/**
	 *
	 * @type {boolean}
	 */
	ios:boolean;

	/**
	 *
	 * @type {boolean}
	 */
	android:boolean;
}

export default IBrowser;
