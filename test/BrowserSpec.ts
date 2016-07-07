import {Browser} from '../src/lib/Browser';
import {UserAgent} from './UserAgent';
import {expect} from 'chai';

var data:Array<UserAgent> = [
	new UserAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36', {chrome:true, version:41}),
	new UserAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36', {chrome:true, version:41}),
];


describe('Browser', () =>
{
	it('should return the correct browser name', () =>
	{
		data.forEach(userAgent => {
			var browser = new Browser(userAgent.userAgent);

			expect(browser.ios).to.equal(userAgent.data.ios);
			expect(browser.android).to.equal(userAgent.data.android);
			expect(browser.firefox).to.equal(userAgent.data.firefox);
			expect(browser.ie).to.equal(userAgent.data.ie);
			expect(browser.chrome).to.equal(userAgent.data.chrome);
			expect(browser.version).to.equal(userAgent.data.version);
			expect(browser.isTablet()).to.equal(false); 
			expect(browser.isIPhone()).to.equal(false);
		})
	});
});
