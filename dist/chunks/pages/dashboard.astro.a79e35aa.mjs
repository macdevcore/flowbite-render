/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro.67efd1ef.mjs';
import 'html-escaper';
import { u as url, $ as $$LayoutSidebar } from './404.astro.7882dc3a.mjs';

const $$Astro$1 = createAstro("http://localhost:2121");
const $$DashBoard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DashBoard;
  const circleLeft = ["Insolin", "Kraft", "VO2"];
  const circleRight = ["Herz", "DNA", "Schlaf"];
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 pt-6 sm:px-6">
	<h1 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
		My Dashboard
	</h1>
	<div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<!-- Main widget -->
		<div class="2xl:col-span-2 flex flex-col gap-4 h-full">

			<div class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 dark:bg-gray-800 shrink-0">
				<div class="py-4 sm:py-6 flex flex-row h-full text-gray-900 dark:text-white">
					<div class="basis-1/3 flex flex-col justify-between items-center border-e-2 border-gray-200 dark:border-gray-700">
						<span class="text-l font-semibold 2xl:text-2xl text-red-600">4.200</span>
						<p class="text-xs opacity-40 2xl:text-sm">Schritte</p>
					</div>
					<div class="basis-1/3 flex flex-col justify-between items-center border-e-2 border-gray-200 dark:border-gray-700">
						<span class="text-l font-semibold 2xl:text-2xl text-amber-500">3 / 5</span>
						<p class="text-xs opacity-40 2xl:text-sm">Routinen</p>
					</div>
					<div class="basis-1/3 flex flex-col justify-between items-center">
						<svg class="w-6 h-5 2xl:w-9 2xl:h-8 text-lime-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
						</svg>
						<p class="text-xs opacity-40 2xl:text-sm">Supps</p>
					</div>
				</div>
			</div>

			<div class="bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 dark:bg-gray-800 h-full">
				<div class="flex flex-row h-full text-gray-900 dark:text-white">
					<div class="basis-2/5 flex flex-col h-full justify-between">
						${circleLeft.map((item) => renderTemplate`<div class="flex flex-row justify-start items-center h-full p-4 sm:p-6">
								<span class="text-sm 2xl:text-l">${item}</span>
							</div>`)}
					</div>
					<div class="basis-1/5 flex flex-col h-full justify-center items-center">
						<div class="shrink-0 w-24 h-24 2xl:w-32 2xl:h-32 aspect-square flex flex-col justify-center items-center border-4 border-red-600 rounded-full">
							<h2 class="text-4xl 2xl:text-5xl font-semibold translate-y-[-0.2rem]">42</h2>
							<p class="text-xs opacity-40 2xl:text-sm translate-y-[-0.2rem]">Calisto</p>
						</div>
					</div>
					<div class="basis-2/5 flex flex-col h-full justify-between">
						${circleRight.map((item) => renderTemplate`<div class="flex flex-row justify-end items-center h-full p-4 sm:p-6">
								<span class="text-sm 2xl:text-l">${item}</span>
							</div>`)}
					</div>

				</div>

			</div>

		</div>
		<!--List widget -->
		<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">

			<h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
					Rechner
			</h5>
			<p class="text-sm font-normal text-gray-500 dark:text-gray-400">Hier sind alle verfügbaren Rechner aufgelistet.</p>
			<ul class="my-4 space-y-4">
					<li>
							<a${addAttribute(url("calc/calculator1"), "href")} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
								<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
								</svg>
								<span class="flex-1 ml-3 whitespace-nowrap">Rechner 1</span>
								<span class="bg-red-100 text-red-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 tracking-wide">HIGHRISK</span>
							</a>
					</li>
					<li>
							<a${addAttribute(url("calc/calculator2"), "href")} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
								<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path>
								</svg>
								<span class="flex-1 ml-3 whitespace-nowrap">Rechner 2</span>
							</a>
					</li>
					<li>
							<a${addAttribute(url("calc/calculator3"), "href")} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
								<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>
								</svg>
								<span class="flex-1 ml-3 whitespace-nowrap">Rechner 3</span>
								<span class="bg-green-100 text-green-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-500 border border-green-100 dark:border-green-500 tracking-wide">PERFECT</span>
							</a>
					</li>
					<li>
							<a${addAttribute(url("calc/calculator4"), "href")} class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
								<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"></path>
								</svg>
								<span class="flex-1 ml-3 whitespace-nowrap">Rechner 4</span>
								<span class="bg-amber-100 text-amber-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-amber-100 dark:bg-gray-700 dark:border-amber-500 dark:text-amber-500 tracking-wide">OPTIMIZE</span>
							</a>
					</li>
			</ul>

		</div>
	</div>
</div>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/modules/DashBoard.astro");

const $$Astro = createAstro("http://localhost:2121");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "DashBoard", $$DashBoard, {})}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/dashboard.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Dashboard,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DashBoard as $, dashboard as d };
