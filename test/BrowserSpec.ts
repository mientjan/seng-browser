import {expect} from 'chai';
import {Browser} from "../src/lib/Browser";
import {browserUserAgent} from "./BrowserMock";

for(var i = 0; i < browserUserAgent.length; i++)
{
	var userAgent = browserUserAgent[i];

	describe('Browser | ' + userAgent.desc, ((userAgent) =>
	{

		it('it should validate correctly browser name ', () =>
		{
			var browser = new Browser(userAgent.ua);
			expect(browser.name).to.equal(userAgent.expect.name)
		});
	}).bind(this, userAgent));
}
