/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.67efd1ef.mjs';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './404.astro.1c58c656.mjs';
import { $ as $$DashBoard } from './dashboard.astro.caa4d9ae.mjs';

const $$Astro = createAstro("http://localhost:2121");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "DashBoard", $$DashBoard, {})}
` })}`;
}, "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/layouts/sidebar.astro");

const $$file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/layouts/sidebar.astro";
const $$url = "/layouts/sidebar";

export { $$Sidebar as default, $$file as file, $$url as url };
