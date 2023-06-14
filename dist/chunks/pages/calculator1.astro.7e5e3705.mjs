/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro.3e08f6f4.mjs';
import 'html-escaper';
import { u as url, $ as $$LayoutSidebar } from './404.astro.c59431ee.mjs';
/* empty css                                 */import { createClient } from '@supabase/supabase-js';

const $$Astro$1 = createAstro("http://localhost:2121");
const $$CalcContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CalcContent;
  const calcs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/calc/data/calc1.md": () => import('./calc1.md.6ac4fcf3.mjs'),"../pages/calc/data/calc2.md": () => import('./calc2.md.7c3fcf96.mjs'),"../pages/calc/data/calc3.md": () => import('./calc3.md.99819e7c.mjs'),"../pages/calc/data/calc4.md": () => import('./calc4.md.a13c9438.mjs')}), () => "../pages/calc/data/*.md");
  const { id, prop1, prop2, prop3, prop4, check1 = false, text } = Astro2.props;
  const calcData = calcs[id - 1];
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 py-6 sm:px-6 astro-4UX47TXS">
	<div class="mb-4 flex flex-row justify-between items-end astro-4UX47TXS">
		<div class="basis-auto astro-4UX47TXS">
			<h1 class="text-3xl font-extrabold md:text-5xl lg:text-6xl astro-4UX47TXS">
				<span class="text-transparent bg-clip-text bg-gradient-to-r to-teal-600 from-primary-600 dark:to-gray-500 dark:from-gray-100 astro-4UX47TXS">${calcData.frontmatter.title}</span>
			</h1>
		</div>
		<div class="basis-auto astro-4UX47TXS">
			<label class="relative inline-flex items-center cursor-pointer astro-4UX47TXS">
				<input type="checkbox" id="check-1" class="sr-only peer astro-4UX47TXS"${addAttribute(check1, "checked")}>
				<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600 astro-4UX47TXS"></div>
			</label>
		</div>
	</div>
	${calcData.frontmatter.alert && renderTemplate`<div id="alert-additional-content-2" class="p-4 mb-6 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 astro-4UX47TXS" role="alert">
			<div class="text-sm astro-4UX47TXS">${calcData.frontmatter.alert}</div>
		</div>`}
	<div class="grid gap-6 xl:grid-cols-3 astro-4UX47TXS">
		<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 astro-4UX47TXS">
			<form id="calc-form"${addAttribute(id, "data-calc")} class="astro-4UX47TXS">
				<div class="grid grid-cols-6 gap-6 astro-4UX47TXS">
					<div class="col-span-6 sm:col-span-3 astro-4UX47TXS">
						<label for="prop-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white astro-4UX47TXS">Prop-1</label>
						<input type="number" name="prop-1" id="prop-1"${addAttribute(prop1, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 astro-4UX47TXS" placeholder="0" required>
					</div>
					<div class="col-span-6 sm:col-span-3 astro-4UX47TXS">
						<label for="prop-2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white astro-4UX47TXS">Prop-2</label>
						<input type="number" name="prop-2" id="prop-2"${addAttribute(prop2, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 astro-4UX47TXS" placeholder="0" required>
					</div>
					<div class="col-span-6 sm:col-span-3 astro-4UX47TXS">
						<label for="prop-3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white astro-4UX47TXS">Prop-3</label>
						<input type="number" name="prop-3" id="prop-3"${addAttribute(prop3, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 astro-4UX47TXS" placeholder="0" required>
					</div>
					<div class="col-span-6 sm:col-span-3 astro-4UX47TXS">
						<label for="prop-4" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white astro-4UX47TXS">Prop-4</label>
						<input type="number" name="prop-4" id="prop-4"${addAttribute(prop4, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 astro-4UX47TXS" placeholder="0" required>
					</div>
					${id == 3 && renderTemplate`<div class="col-span-6 sm:col-span-6 astro-4UX47TXS">
							<label for="text1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white astro-4UX47TXS">Text-1</label>
							<textarea id="text1" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 astro-4UX47TXS" placeholder="Write your thoughts here...">${text}</textarea>
						</div>`}
					<div class="col-span-6 sm:col-full astro-4UX47TXS">
						<button id="calc-form-btn" class="mt-4 flex w-full justify-center items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all
							 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:text-gray-600 disabled:bg-gray-200 dark:disabled:opacity-60 dark:disabled:bg-gray-50 disabled:pointer-events-none astro-4UX47TXS" type="submit" style="height:40px !important;" disabled>
								<svg aria-hidden="true" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-600 astro-4UX47TXS" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" class="astro-4UX47TXS"></path>
										<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" class="astro-4UX47TXS"></path>
								</svg>
								<span class="astro-4UX47TXS">Speichern</span>
							</button>
					</div>
				</div>
			</form>
		</div>
		<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 astro-4UX47TXS">
		<button id="calc-secret-btn"${addAttribute(text, "data-secret")}${addAttribute(id, "data-aid")} class="astro-4UX47TXS">
			<span class="astro-4UX47TXS">get-secret</span>
		</button>
	</div>

	</div>
	<div class="mt-6 flex w-full rounded-lg shadow-lg justify-between overflow-hidden astro-4UX47TXS" role="group">
		${id != 1 && renderTemplate`<a${addAttribute(url("calc/calculator1"), "href")} class="inline-flex flex-col md:flex-row justify-center items-center w-full px-4 py-2 md:py-3 text-xs text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 astro-4UX47TXS">
			<svg class="w-4 h-4 mb-2 md:mb-0 md:mr-2 astro-4UX47TXS" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" class="astro-4UX47TXS"></path>
			</svg>
			Rechner 1
		</a>`}
		${id != 2 && renderTemplate`<a${addAttribute(url("calc/calculator2"), "href")} class="inline-flex flex-col md:flex-row justify-center items-center w-full px-4 py-2 md:py-3 text-xs text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 astro-4UX47TXS">
			<svg class="w-4 h-4 mb-2 md:mb-0 md:mr-2 astro-4UX47TXS" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" class="astro-4UX47TXS"></path>
			</svg>
			Rechner 2
		</a>`}
		${id != 3 && renderTemplate`<a${addAttribute(url("calc/calculator3"), "href")} class="inline-flex flex-col md:flex-row justify-center items-center w-full px-4 py-2 md:py-3 text-xs text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 astro-4UX47TXS">
			<svg class="w-4 h-4 mb-2 md:mb-0 md:mr-2 astro-4UX47TXS" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" class="astro-4UX47TXS"></path>
			</svg>
			Rechner 3
		</a>`}
		${id != 4 && renderTemplate`<a${addAttribute(url("calc/calculator4"), "href")} class="inline-flex flex-col md:flex-row justify-center items-center w-full px-4 py-2 md:py-3 text-xs text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 astro-4UX47TXS">
			<svg class="w-4 h-4 mb-2 md:mb-0 md:mr-2 astro-4UX47TXS" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" class="astro-4UX47TXS"></path>
			</svg>
			Rechner 4
		</a>`}
	</div>
</div>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/modules/CalcContent.astro");

const $$Astro = createAstro("http://localhost:2121");
const $$Calculator1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculator1;
  const calcId = 1;
  var userId = "77173b116fde045e661a0cb7ec902919";
  const supabaseUrl = "https://mhzckigyfxwlxlpunqez.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueWZyaG1meHFpY2RodHR4a2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjYzNDY3NywiZXhwIjoyMDAyMjEwNjc3fQ.xKmXdHqvIow96RjRvzX1ckYTeVZbjeVPfxkEBtE-8sM";
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: fetch.bind(globalThis) }
  });
  const { data, error } = await supabase.from("Calculator").select("prop1, prop2, prop3, prop4, check1, text").eq("user_id", userId).eq("calc", calcId).limit(1).single();
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "CalcContent", $$CalcContent, { "id": calcId, "prop1": data.prop1, "prop2": data.prop2, "prop3": data.prop3, "prop4": data.prop4, "check1": data.check1, "text": data.text })}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/calculator1.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/calculator1.astro";
const $$url = "/calc/calculator1";

const calculator1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Calculator1,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CalcContent as $, calculator1 as c };
