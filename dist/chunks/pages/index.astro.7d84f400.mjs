/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.3e08f6f4.mjs';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './404.astro.c59431ee.mjs';
import { $ as $$DashBoard } from './dashboard.astro.f5c1d6dc.mjs';
/* empty css                         */
const $$Astro = createAstro("http://localhost:2121");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "DashBoard", $$DashBoard, {})}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/index.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
