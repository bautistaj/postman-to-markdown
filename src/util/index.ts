import { jsonDocument } from "../@types/types";
import { readItems } from "./read";

/**
 * Create structure of the markdown documentation
 * @param {object} docJson json of the document to be converted
 * @type {string} jsonDocument structure of the markdown documentation
 * @return {string} markdown markdown structure of the documentation
 */
export function createStructureOfMarkdown(docJson: jsonDocument): string {
  let markdown = "";
  markdown += `# Project: ${docJson.info.name}\n`;
  markdown +=
    docJson.info.description !== undefined
      ? `${docJson.info.description || ""}\n`
      : ``;
  markdown += readItems(docJson.item);

  return markdown;
}
export default { createStructureOfMarkdown };
