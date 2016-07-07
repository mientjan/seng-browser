import IBrowser from "../src/lib/IBrowser";

class UserAgentTest {
	constructor(public userAgent:string, public data:IBrowser ){}
}

var data:Array<UserAgentTest> = [
	new UserAgentTest('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36', {chrome:true, version:41})
];

export UserAgentTest;
export data;
