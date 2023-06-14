/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.3e08f6f4.mjs';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './404.astro.c59431ee.mjs';
import { $ as $$CalcContent } from './calculator1.astro.1814b05f.mjs';
import { createClient } from '@supabase/supabase-js';
/* empty css                         *//* empty css                                 */
const $$Astro = createAstro("http://localhost:2121");
const $$Calculator3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculator3;
  const calcId = 3;
  const userId = "74469a5bd-e480-483f-bdec-0563ff6267c9";
  const supabaseUrl = "https://mhzckigyfxwlxlpunqez.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oemNraWd5Znh3bHhscHVucWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NzMyNjcsImV4cCI6MjAwMjM0OTI2N30.MEWYY5XSrYFY8iUd9p_ybUlZ5IVAD95Y4Std-LYH-iM";
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: fetch.bind(globalThis) }
  });
  const { data, error } = await supabase.from("calc_data").select("prop1, prop2, prop3, prop4, check1, text1").eq("account_id", userId).eq("calc", calcId).limit(1).single();
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "CalcContent", $$CalcContent, { "id": calcId, "prop1": data.prop1, "prop2": data.prop2, "prop3": data.prop3, "prop4": data.prop4, "check1": data.check1, "text": data.text })}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/calculator3.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/calculator3.astro";
const $$url = "/calc/calculator3";

export { $$Calculator3 as default, $$file as file, $$url as url };
