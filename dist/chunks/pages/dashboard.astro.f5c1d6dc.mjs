/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro.3e08f6f4.mjs';
import 'html-escaper';
import { u as url, $ as $$LayoutSidebar } from './404.astro.c59431ee.mjs';

const $$Astro$3 = createAstro("http://localhost:2121");
const $$BadgeByStatus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BadgeByStatus;
  const { status } = Astro2.props;
  return renderTemplate`${status === "pending" && renderTemplate`${maybeRenderHead($$result)}<span class="inline-flex items-center bg-gray-200 text-gray-800 text-xs px-3 py-1 font-normal rounded-full dark:bg-gray-700 dark:text-gray-300">
		OFFEN <span class="w-2 h-2 ml-2 bg-gray-500 rounded-full"></span>
	</span>`}
${status === "risk" && renderTemplate`<span class="inline-flex items-center bg-amber-100 text-amber-800 text-xs px-3 py-1 font-normal rounded-full dark:bg-amber-900 dark:text-amber-300">
		ACHTUNG <span class="w-2 h-2 ml-2 bg-amber-500 rounded-full"></span>
	</span>`}
${status === "success" && renderTemplate`<span class="inline-flex items-center bg-green-100 text-green-800 text-xs px-3 py-1 font-normal rounded-full dark:bg-green-900 dark:text-green-300">
		OPTIMAL <span class="w-2 h-2 ml-2 bg-green-500 rounded-full"></span>
	</span>`}
${status === "error" && renderTemplate`<span class="inline-flex items-center bg-red-100 text-red-800 text-xs px-3 py-1 font-normal rounded-full dark:bg-red-900 dark:text-red-300">
		KRITISCH <span class="w-2 h-2 ml-2 bg-red-500 rounded-full"></span>
	</span>`}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/components/BadgeByStatus.astro");

const $$Astro$2 = createAstro("http://localhost:2121");
const $$SvgIconByName = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SvgIconByName;
  const { icon = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
${icon === "heart" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>`}
${icon === "cube" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"></path>`}
${icon === "moon" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path>`}
${icon === "puzzle" && renderTemplate`<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"></path>`}
</svg>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/components/SvgIconByName.astro");

const $$Astro$1 = createAstro("http://localhost:2121");
const $$DashBoard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DashBoard;
  const circleLeft = ["Insulin", "Kraft", "VO2"];
  const circleRight = ["Herz", "DNA", "Schlaf"];
  const calcs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/calc/data/calc1.md": () => import('./calc1.md.6ac4fcf3.mjs'),"../pages/calc/data/calc2.md": () => import('./calc2.md.7c3fcf96.mjs'),"../pages/calc/data/calc3.md": () => import('./calc3.md.99819e7c.mjs'),"../pages/calc/data/calc4.md": () => import('./calc4.md.a13c9438.mjs')}), () => "../pages/calc/data/*.md");
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 pt-6 sm:px-6">
	<div class="mb-4 flex flex-row justify-between items-center">
		<div class="basis-auto">
			<h1 class="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span class="text-transparent bg-clip-text bg-gradient-to-r to-teal-600 from-primary-600 dark:to-gray-500 dark:from-gray-100">Dashboard</span>
			</h1>
		</div>
		<div class="basis-auto">
			$DATE
		</div>
	</div>

	<div class="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
		<!-- Main widget -->
		<div class="2xl:col-span-2 flex flex-col gap-6 h-full">

			<div class="bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 shrink-0">
				<div class="py-4 sm:py-6 flex flex-row h-full text-gray-900 dark:text-white">
					<div class="basis-1/3 flex flex-col justify-between items-center border-e-2 border-gray-200 dark:border-gray-700 gap-2">
						<span class="text-2xl 2xl:text-3xl font-light text-red-600">4.200</span>
						<p class="text-xs opacity-40 2xl:text-sm">Schritte</p>
					</div>
					<div class="basis-1/3 flex flex-col justify-between items-center border-e-2 border-gray-200 dark:border-gray-700 gap-2">
						<span class="text-2xl 2xl:text-3xl font-light text-amber-500">3 / 5</span>
						<p class="text-xs opacity-40 2xl:text-sm">Routinen</p>
					</div>
					<div class="basis-1/3 flex flex-col justify-between items-center gap-2">
						<svg class="w-7 h-7 2xl:w-9 2xl:h-8 text-lime-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
						</svg>
						<p class="text-xs opacity-40 2xl:text-sm">Supps</p>
					</div>
				</div>
			</div>

			<div class="bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 h-full">
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
			<ul class="mt-4 space-y-4 md:mt-6 md:space-y-6">
				${calcs.map((calc) => renderTemplate`<li>
						<a${addAttribute(url(calc.frontmatter.link), "href")} class="flex items-center p-3 text-base text-gray-900 rounded-lg bg-gray-100 hover:bg-gray-50 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
							${renderComponent($$result, "SvgIconByName", $$SvgIconByName, { "icon": calc.frontmatter.icon })}
							<span class="flex-1 ml-3 whitespace-nowrap">${calc.frontmatter.title}</span>
							${renderComponent($$result, "BadgeByStatus", $$BadgeByStatus, { "status": calc.frontmatter.status })}
						</a>
					</li>`)}
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
