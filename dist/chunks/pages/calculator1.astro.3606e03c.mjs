/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderComponent } from '../astro.67efd1ef.mjs';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './404.astro.1c58c656.mjs';
import { createClient } from '@supabase/supabase-js';

const $$Astro$1 = createAstro("http://localhost:2121");
const $$CalcContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CalcContent;
  const { id, prop1, prop2, prop3, prop4, check1, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="px-4 pt-6 sm:px-6">
	<div class="mb-4 flex flex-row justify-between items-center">
		<div class="basis-auto">
			<h1 class="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
				Rechner ${id}
			</h1>
		</div>
		<div class="basis-auto">
			<label class="relative inline-flex items-center cursor-pointer">
				<input type="checkbox" value="" class="sr-only peer"${addAttribute(check1 && checked, "check1 && checked")}>
				<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
			</label>
		</div>
	</div>
	<div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
		<div class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-3 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
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
						<input type="number" name="prop-4" id="prop-4"${addAttribute(prop4, "value")} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" required>
					</div>
					${id == 3 && renderTemplate`<div class="col-span-6 sm:col-span-6">
							<label for="text1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Text-1</label>
							<textarea id="text1" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
						</div>`}
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
  const calcId = 1;
  var userId = "77173b116fde045e661a0cb7ec902919";
  const supabaseUrl = "https://anyfrhmfxqicdhttxkij.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueWZyaG1meHFpY2RodHR4a2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjYzNDY3NywiZXhwIjoyMDAyMjEwNjc3fQ.xKmXdHqvIow96RjRvzX1ckYTeVZbjeVPfxkEBtE-8sM";
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: fetch.bind(globalThis) }
  });
  const { data, error } = await supabase.from("Calculator").select("prop1, prop2, prop3, prop4, check1, text").eq("user_id", userId).eq("calc", calcId).limit(1).single();
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "CalcContent", $$CalcContent, { "id": calcId, "prop1": data.prop1, "prop2": data.prop2, "prop3": data.prop3, "prop4": data.prop4, "check1": data.check1, "text": data.text })}
	${maybeRenderHead($$result2)}<div class="px-4 pt-6 sm:px-6">
		<div id="alert-additional-content-2" class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
			<div class="flex items-center">
				<svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
				<span class="sr-only">Info</span>
				<h3 class="text-lg font-medium">KRITISCH</h3>
			</div>
			<div class="mt-2 mb-4 text-sm">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</div>
			<div class="flex">
				<button type="button" class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
					VERSTANDEN
				</button>
			</div>
		</div>
	</div>
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
