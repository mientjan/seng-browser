import IBrowser from "../src/lib/IBrowser";
export class BrowserData implements IBrowser {

	userAgent:string = '';
	platform:string = '';
	name:string = '';
	version:number = 0;
	ie:boolean = false;
	chrome:boolean = false;
	firefox:boolean = false;
	ios:boolean = false;
	android:boolean = false;

	constructor(data:IBrowser){
		Object.keys(data).forEach(name => {
			this[name] = data[name];
		});
	}
}
