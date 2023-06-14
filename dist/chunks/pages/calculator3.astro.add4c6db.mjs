/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.67efd1ef.mjs';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './404.astro.7882dc3a.mjs';
import { $ as $$CalcContent } from './calculator1.astro.d2c4cca8.mjs';
import { createClient } from '@supabase/supabase-js';

const $$Astro = createAstro("http://localhost:2121");
const $$Calculator3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculator3;
  var userId = "77173b116fde045e661a0cb7ec902919";
  const supabaseUrl = "https://anyfrhmfxqicdhttxkij.supabase.co";
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueWZyaG1meHFpY2RodHR4a2lqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjYzNDY3NywiZXhwIjoyMDAyMjEwNjc3fQ.xKmXdHqvIow96RjRvzX1ckYTeVZbjeVPfxkEBtE-8sM";
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { fetch: fetch.bind(globalThis) }
  });
  const { data, error } = await supabase.from("Calculator").select("prop1, prop2, text").eq("user_id", userId).eq("calc", 3).limit(1).single();
  const calcId = "Rechner 3";
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "CalcContent", $$CalcContent, { "id": calcId, "prop1": data.prop1, "prop2": data.prop2, "text": data.text })}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/calculator3.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/calculator3.astro";
const $$url = "/calc/calculator3";

export { $$Calculator3 as default, $$file as file, $$url as url };
