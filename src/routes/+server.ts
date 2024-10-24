import type { RequestHandler } from './$types';
import { data } from './data';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	data.push(body);
	return new Response(null, { status: 200 });
};
