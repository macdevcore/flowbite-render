export const API_URL = `${import.meta.env.SITE}${import.meta.env.BASE_URL}api/`;

export const REMOTE_ASSETS_BASE_URL = `https://flowbite-admin-dashboard.vercel.app`;
export const MAIN_URL  = 'https://datora.onrender.com';
export const USER_ID  = '77173b116fde045e661a0cb7ec902919';

export const SITE_TITLE = 'DevCode Astro App';

/* Useful flag for sourcing from `./data` entirely, disabling randomize layer */
export const RANDOMIZE = Boolean(import.meta.env.RANDOMIZE) || true;

export const CALCULATOR = [
	{
		title: 'Rechner 1',
		icon: 'heart',
		alert: false
	},
	{
		title: 'Rechner 2',
		icon: 'cube',
		alert: false
	},
	{
		title: 'Rechner 3',
		icon: 'moon',
		alert: false
	},
	{
		title: 'Rechner 4',
		icon: 'puzzle',
		alert: false
	}
];
