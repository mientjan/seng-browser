import {BrowserData} from "./BrowserData";
export class UserAgent {

	public data:BrowserData;

	constructor(public userAgent:string, data:any ){
		this.data = new BrowserData(data);
	}
}
