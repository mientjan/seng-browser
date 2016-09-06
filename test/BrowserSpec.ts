import {expect} from 'chai';
import {Browser} from "../src/lib/Browser";
import {browserUserAgent} from "./BrowserMock";

for(var i = 0; i < browserUserAgent.length; i++)
{
	var userAgent = browserUserAgent[i];

	describe('Browser | ' + userAgent.desc, ((userAgent) =>
	{

		it('it should validate correctly browser', () =>
		{
			var browser = new Browser(userAgent.ua);
			expect(browser.name).to.equal(userAgent.expect.name);

			if( userAgent.expect.chrome !== void 0)
			{
				expect(browser.chrome).to.equal(userAgent.expect.chrome);
			}

			if( userAgent.expect.ie !== void 0)
			{
				expect(browser.ie).to.equal(userAgent.expect.ie);
			}

			if( userAgent.expect.android !== void 0)
			{
				expect(browser.android).to.equal(userAgent.expect.android);
			}
		});
	}).bind(this, userAgent));
}
