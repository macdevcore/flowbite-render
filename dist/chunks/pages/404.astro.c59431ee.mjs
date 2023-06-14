/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as addAttribute, e as renderHead, m as maybeRenderHead, f as renderComponent } from '../astro.3e08f6f4.mjs';
import 'html-escaper';
/* empty css                         */
const name = "flowbite-astro-admin-dashboard";
const version = "1.0.2";
const description = "A free and open-source admin dashboard template built with Tailwind CSS, Flowbite and Astro";
const keywords = [
	"tailwind",
	"tailwind css",
	"flowbite",
	"admin dashboard",
	"dashboard ui",
	"admin dashboard template",
	"html",
	"css",
	"astro",
	"astro-theme",
	"astro-template",
	"javascript"
];
const homepage = "https://flowbite.com";
const bugs = "https://github.com/themesberg/flowbite-astro-admin-dashboard/issues";
const repository = "https://github.com/themesberg/flowbite-astro-admin-dashboard.git";
const license = "MIT";
const author = "Bergside Inc.";
const contributors = [
	"Zoltán Szőgyényi <https://twitter.com/zoltanszogyenyi>",
	"Robert Tanislav <https://twitter.com/roberttanislav>",
	"Julian Cataldo <https://twitter.com/Julian_Cataldo>"
];
const type = "module";
const scripts = {
	astro: "astro",
	build: "astro build",
	dev: "astro dev",
	preview: "astro preview",
	start: "astro dev"
};
const dependencies = {
	"@astrojs/sitemap": "^1.1.0",
	"@astrojs/tailwind": "^3.0.1",
	"@faker-js/faker": "^7.6.0",
	"@supabase/supabase-js": "^2.25.0",
	apexcharts: "^3.37.2",
	astro: "^2.0.4",
	flowbite: "^1.6.3",
	"flowbite-typography": "^1.0.3",
	shiki: "^0.14.1",
	"tailwind-scrollbar": "^3.0.0",
	tailwindcss: "^3.0.24"
};
const devDependencies = {
	"@types/eslint": "^8.21.1",
	"@typescript-eslint/eslint-plugin": "^5.54.1",
	"@typescript-eslint/parser": "^5.54.1",
	"astro-eslint-parser": "^0.11.0",
	eslint: "^8.35.0",
	"eslint-config-airbnb-base": "^15.0.0",
	"eslint-config-airbnb-typescript": "^17.0.0",
	"eslint-config-prettier": "^8.7.0",
	"eslint-import-resolver-typescript": "^3.5.3",
	"eslint-plugin-astro": "^0.23.0",
	"eslint-plugin-import": "^2.27.5",
	"eslint-plugin-prettier": "^4.2.1",
	"eslint-plugin-tsdoc": "^0.2.17"
};
const pkg = {
	name: name,
	version: version,
	"private": "true",
	description: description,
	keywords: keywords,
	homepage: homepage,
	bugs: bugs,
	repository: repository,
	license: license,
	author: author,
	contributors: contributors,
	type: type,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies
};

const REMOTE_ASSETS_BASE_URL = `https://flowbite-admin-dashboard.vercel.app`;
const MAIN_URL = "https://datora.onrender.com";
const SITE_TITLE = "DevCode Astro App";

function url(path = "") {
  return `${MAIN_URL}/${path}`;
}
function asset(path) {
  return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}

const ImageFavicon32 = "/_astro/favicon_32.2874f9b5.png";

const ImageFavicon256 = "/_astro/favicon_256.77af2458.png";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("http://localhost:2121");
const $$LayoutCommon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LayoutCommon;
  const { class: clazz } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<title>', " \u2014 v", '</title>\n\n		<meta name="generator"', '>\n		<meta name="description"', '>\n		<meta name=""', ">\n		<link", ' rel="shortcut icon" type="image/x-icon">\n		<link', ' rel="apple-touch-icon">\n		<link rel="sitemap" type="application/xml"', `>

		<meta name="author" content="Julian Cataldo, Zolt\xE1n Sz\u0151gy\xE9nyi, Robert Tanislav">
		<meta name="copyright" content="MIT">

		<script>
			if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		<\/script>
	`, "</head>\n	<body", ">\n		", "\n	\n\n</body></html>"])), SITE_TITLE, pkg.version, addAttribute(Astro2.generator, "content"), addAttribute(pkg.description, "content"), addAttribute(pkg.description, "content"), addAttribute(ImageFavicon32, "href"), addAttribute(ImageFavicon256, "href"), addAttribute(url("sitemap-index.xml"), "href"), renderHead($$result), addAttribute([
    //
    clazz,
    "bg-gray-50 dark:bg-gray-800",
    "scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem]",
    "scrollbar-track-slate-200  scrollbar-thumb-gray-400",
    "dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700"
  ], "class:list"), renderSlot($$result, $$slots["default"]));
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/app/LayoutCommon.astro");

const ImageLogo = "/_astro/datora_logo.5fe0c94d.png";

const $$Astro$5 = createAstro("http://localhost:2121");
const $$ColorModeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ColorModeSwitcher;
  return renderTemplate`${maybeRenderHead($$result)}<button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
	<svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
	<svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
<div id="tooltip-toggle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
	Toggle dark mode
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/components/ColorModeSwitcher.astro");

const $$Astro$4 = createAstro("http://localhost:2121");
const $$NavBarSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavBarSidebar;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
	<div class="px-3 py-3 lg:px-5 lg:pl-3">
		<div class="flex items-center justify-between">
			<div class="flex items-center justify-start">
				<button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
					<svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
					<svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				</button>
				<a href="/" class="flex ml-2 md:mr-24 ">
					<img${addAttribute(ImageLogo, "src")} class="h-8 mr-3" alt="Logo" height="32">
				</a>
			</div>

			<div class="flex items-center">

				${renderComponent($$result, "ColorModeSwitcher", $$ColorModeSwitcher, {})}

				<!-- Profile -->
				<div class="flex items-center ml-3">
					<div>
						<button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
							<span class="sr-only">Open user menu</span>
							<img class="w-8 h-8 rounded-full"${addAttribute(ImageFavicon256, "src")} alt="user photo">
						</button>
					</div>
					<!-- Dropdown menu -->
					<div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-2">
						<div class="px-4 py-3" role="none">
							<p class="text-sm text-gray-900 dark:text-white" role="none">
								DevCore Websystems
							</p>
							<p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
								mail@devcore.systems
							</p>
						</div>
						<ul class="py-1" role="none">
							<li>
								<a${addAttribute(url("dashboard"), "href")} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
							</li>
							<li>
								<a id="btm-account-signin" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign in</a>
							</li>
							<li>
								<a id="btm-account-signout" class="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:text-red-500 dark:hover:bg-gray-600 dark:hover:text-red" role="menuitem">Sign out</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/app/NavBarSidebar.astro");

const $$Astro$3 = createAstro("http://localhost:2121");
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideBar;
  return renderTemplate`<!-- TODO: Dynamic dropdowns -->${maybeRenderHead($$result)}<aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width transition-all" aria-label="Sidebar">
	<div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
		<div${addAttribute([
    "flex flex-col flex-1 pt-5 pb-28 overflow-y-auto",
    "scrollbar scrollbar-w-2 scrollbar-thumb-rounded-[0.1667rem]",
    "scrollbar-thumb-slate-200 scrollbar-track-gray-400",
    "dark:scrollbar-thumb-slate-900 dark:scrollbar-track-gray-800"
  ], "class:list")}>
			<div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
				<ul class="pb-2 space-y-2">
					<li>
						<a${addAttribute(url("dashboard"), "href")} class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
							<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
							<span class="ml-3" sidebar-toggle-item>Dashboard</span>
						</a>
					</li>
					<li>
						<button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-calc" aria-expanded="true" data-collapse-toggle="dropdown-calc">
						<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"></path>
						</svg>
							<span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Rechner</span>
							<svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</button>
						<ul id="dropdown-calc" class="space-y-2 py-2">
							<li>
								<a${addAttribute(url("calc/calculator1"), "href")} class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700">Rechner 1</a>
							</li>
							<li>
								<a${addAttribute(url("calc/calculator2"), "href")} class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700">Rechner 2</a>
							</li>
							<li>
								<a${addAttribute(url("calc/calculator3"), "href")} class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700">Rechner 3</a>
							</li>
							<li>
								<a${addAttribute(url("calc/calculator4"), "href")} class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-gray-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-gray-700">Rechner 4</a>
							</li>
						</ul>
					</li>
				</ul>
				<div class="pt-2 space-y-2">
					<a${addAttribute(url("settings"), "href")} class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
						<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path clip-rule="evenodd" fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
						</svg>
						<span class="ml-3" sidebar-toggle-item>Settings</span>
					</a>
				</div>
			</div>
		</div>
		<div class="absolute bottom-0 left-0 justify-center p-4 w-full bg-white dark:bg-gray-800 z-20">
      <p class="text-sm text-gray-500 dark:text-gray-400">Berechnungen</p>
      <div class="font-medium text-gray-900 dark:text-white">5 von 12</div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4 dark:bg-gray-700">
          <div class="bg-teal-500 h-2.5 rounded-full" style="width: 43%"></div>
      </div>
      <a href="#" class="inline-flex items-center justify-center w-full py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          <svg aria-hidden="true" class="mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          Upgrade to Pro
      </a>
  </div>
	</div>
</aside>

<div class="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop">
</div>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/app/SideBar.astro");

const $$Astro$2 = createAstro("http://localhost:2121");
const $$LayoutSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutSidebar;
  return renderTemplate`${renderComponent($$result, "LayoutCommon", $$LayoutCommon, { "class": "astro-53FVB3KY" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "NavBarSidebar", $$NavBarSidebar, { "class": "astro-53FVB3KY" })}

	${renderComponent($$result2, "SideBar", $$SideBar, { "class": "astro-53FVB3KY" })}

	${maybeRenderHead($$result2)}<div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900 astro-53FVB3KY">
		<div id="main-content" class="relative w-full h-full overflow-y-auto bg-gray-100 lg:ml-64 dark:bg-gray-900 min-h-screen astro-53FVB3KY">
			${renderSlot($$result2, $$slots["default"])}
		</div>
	</div>
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/app/LayoutSidebar.astro");

const $$Astro$1 = createAstro("http://localhost:2121");
const $$ErrorNotFound = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorNotFound;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
	<div class="block md:max-w-lg">
		<img${addAttribute(asset("images/illustrations/404.svg"), "src")} alt="astronaut image">
	</div>
</div>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/modules/ErrorNotFound.astro");

const $$Astro = createAstro("http://localhost:2121");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, {})}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/404.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutSidebar as $, _404 as _, url as u };
