/* empty css                         */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.3e08f6f4.mjs';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Dieser Blogbeitrag ist noch in Bearbeitung.</p>");

				const frontmatter = {"id":4,"title":"Rechner 4","link":"calc/calculator4","icon":"puzzle","status":"risk","alert":false};
				const file = "C:/Users/dechm/Dropbox/DevCore/GitHubRepos/flowbite-render/flowbite-render/src/pages/calc/data/calc4.md";
				const url = "/calc/data/calc4";
				function rawContent() {
					return "\nDieser Blogbeitrag ist noch in Bearbeitung.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
