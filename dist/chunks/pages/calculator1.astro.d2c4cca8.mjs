/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro.67efd1ef.mjs';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './404.astro.7882dc3a.mjs';
import { createClient } from '@supabase/supabase-js';

const $$Astro$1 = createAstro("http://localhost:2121");
const $$CalcContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CalcContent;
  const { id, prop1, prop2, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 pt-6 sm:px-6">
	<h1 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
		${id} ${id == "Rechner 3" && renderTemplate`<svg class="w-6 h-5 2xl:w-9 2xl:h-8 text-lime-500" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
		</svg>`}
	</h1>
	<div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
			<h3 class="mb-4 text-xl font-semibold dark:text-white">
				Persönliche Daten
			</h3>
			<form action="#">
				<div class="grid grid-cols-6 gap-6">
					<div class="col-span-6 sm:col-span-3">
						<label for="prop-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prop-1</label>
						<input type="number" name="prop-1" id="prop-1"${addAttribute(prop1, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label for="prop-2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prop-2</label>
						<input type="number" name="prop-2" id="prop-2"${addAttribute(prop2, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label for="prop-3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prop-3</label>
						<input type="number" name="prop-3" id="prop-3"${addAttribute(prop3, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required>
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label for="prop-4" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prop-4</label>
						<input id="prop-4" type="range" min="0" max="100"${addAttribute(prop4, "value")} class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
					</div>
					<div class="col-span-6 sm:col-span-3">
						<label class="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" value="" class="sr-only peer">
							<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
							<span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Prop-5</span>
						</label>
					</div>
					<div class="col-span-6 sm:col-span-6">
						<label for="text1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text-1</label>
						<textarea id="text1" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
					</div>
					<div class="col-span-6 sm:col-full">
						<button class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">Save all</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/modules/CalcContent.astro");

const $$Astro = createAstro("http://localhost:2121");
const $$Calculator1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculator1;
  var userId = "77173b116fde045e661a0cb7ec902919";
  const supabaseUrl = "https://anyfrhmfxqicdhttxkij.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueWZyaG1meHFpY2RodHR4a2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjYzNDY3NywiZXhwIjoyMDAyMjEwNjc3fQ.xKmXdHqvIow96RjRvzX1ckYTeVZbjeVPfxkEBtE-8sM";
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: fetch.bind(globalThis) }
  });
  const { data, error } = await supabase.from("Calculator").select("prop1, prop2, text").eq("user_id", userId).eq("calc", 1).limit(1).single();
  const calcId = "Rechner 1";
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "CalcContent", $$CalcContent, { "id": calcId, "prop1": data.prop1, "prop2": data.prop2, "text": data.text })}
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
