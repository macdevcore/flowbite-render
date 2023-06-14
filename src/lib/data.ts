// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL, MAIN_URL, CALCULATOR } from '../app/constants.js';

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${MAIN_URL}/${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function calculator(handle: string) {
	return `${handle}`;
}
