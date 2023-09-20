import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import {$} from 'execa';
 
export const POST: RequestHandler = async ({ request }) => {
    const { niveau, id_evaluation } = await request.json();
    const { stdout } = await $`./evaluation ${niveau} ${id_evaluation}`
    return json(JSON.parse(stdout))
};