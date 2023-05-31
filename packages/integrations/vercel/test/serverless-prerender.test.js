import { expect } from 'chai';
import { loadFixture } from './test-utils.js';

describe('Serverless prerender', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;

	before(async () => {
		process.env.PRERENDER = true;
		fixture = await loadFixture({
			root: './fixtures/serverless-prerender/',
		});
	});

	it('build successful', async () => {
		await fixture.build();
		expect(await fixture.readFile('../.vercel/output/static/index.html')).to.be.ok;
	});
});

describe('Serverless hybrid rendering', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;

	before(async () => {
		process.env.PRERENDER = true;
		fixture = await loadFixture({
			root: './fixtures/serverless-prerender/',
			output: 'hybrid',
		});
	});

	it('build successful', async () => {
		await fixture.build();
		expect(await fixture.readFile('../.vercel/output/static/index.html')).to.be.ok;
	});
});
