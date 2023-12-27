import { getAssetFromKV } from '@cloudflare/kv-asset-handler';
import page from './components/page.js';

function responseHtml(html) {
	return new Response(html, {
		headers: {'content-type': 'text/html;charset=UTF-8'}
	});
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		if(url.pathname.startsWith('/public/')) return await getAssetFromKV(request, env);
		if(url.pathname === '/') return await responseHtml(await page.home({ url: url }));
		if(url.pathname === '/test') return await responseHtml(await page.test({ url: url }));
		return await responseHtml(await page.error({ url: url }));
	}
};
