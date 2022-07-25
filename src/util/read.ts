import {
  jsonAuth,
  jsonBody,
  jsonResponse,
  jsonQuery,
  jsonRequest,
} from "../@types/types";

/**
 * Read auth of each method
 * @param {object} auth
 */
export function readAuthorization(auth: jsonAuth) {
  let markdown = "";
  if (auth) {
    markdown += `### 🔑 Authentication ${auth.type}\n`;
    markdown += `\n`;
    markdown += `|Param|value|Type|\n`;
    markdown += `|---|---|---|\n`;
    if (auth.bearer) {
      auth.bearer.map((auth) => {
        markdown += `|${auth.key}|${auth.value}|${auth.type}|\n`;
      });
    }
    markdown += `\n`;
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read request of each method
 * @param {object} request information
 * @return {string} info of data about request options
 */
export function readRequestOptions(request: jsonRequest) {
  let markdown = "";
  if (request) {
    request.header.map((header) => {
      markdown += `### Headers\n`;
      markdown += `\n`;
      markdown += `|Content-Type|Value|\n`;
      markdown += `|---|---|\n`;
      markdown += `|${header.key}|${header.value}|\n`;
      markdown += `\n`;
      markdown += `\n`;
    });
  }
  return markdown;
}

export function readQueryParams(url: jsonQuery) {
  let markdown = "";
  if (url?.query) {
    markdown += `### Query Params\n`;
    markdown += `\n`;
    markdown += `|Param|value|\n`;
    markdown += `|---|---|\n`;
    url.query.map((query) => {
      markdown += `|${query.key}|${query.value}|\n`;
    });
    markdown += `\n`;
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read objects of each method
 * @param {object} body
 */
export function readFormDataBody(body: jsonBody) {
  let markdown = "";

  if (body) {
    if (body.mode === "raw") {
      markdown += `### Body (**${body.mode}**)\n`;
      markdown += `\n`;
      markdown += `\`\`\`json\n`;
      markdown += `${body.raw}\n`;
      markdown += `\`\`\`\n`;
      markdown += `\n`;
    }

    if (body.mode === "formdata") {
      markdown += `### Body ${body.mode}\n`;
      markdown += `\n`;
      markdown += `|Param|value|Type|\n`;
      markdown += `|---|---|---|\n`;
      body.formdata.map((form) => {
        markdown += `|${form.key}|${
          form.type === "file"
            ? form.src
            : form.value !== undefined
            ? form.value.replace(/\\n/g, "")
            : ""
        }|${form.type}|\n`;
      });
      markdown += `\n`;
      markdown += `\n`;
    }
  }

  return markdown;
}

/**
 * Read methods of response
 * @param {array} responses
 */
export function readResponse(responses: jsonResponse) {
  let markdown = "";
  if (responses?.length) {
    const response = responses[0];
    markdown += `### Response: ${response.code}\n`;
    markdown += `\`\`\`json\n`;
    markdown += `${response.body}\n`;
    markdown += `\`\`\`\n`;
    markdown += `\n`;
  }
  return markdown;
}

/**
 * Read methods of each item
 * @param {object} post
 */
export function readMethods(method) {
  let markdown = "";

  markdown += `\n`;
  markdown += `## End-point: ${method.name}\n`;
  markdown +=
    method?.request?.description !== undefined
      ? `${method?.request?.description || ""}\n`
      : ``;
  markdown += `### Method: ${method?.request?.method}\n`;
  markdown += `>\`\`\`\n`;
  markdown += `>${method?.request?.url?.raw}\n`;
  markdown += `>\`\`\`\n`;
  markdown += readRequestOptions(method?.request);
  markdown += readFormDataBody(method?.request?.body);
  markdown += readQueryParams(method?.request?.url);
  markdown += readAuthorization(method?.request?.auth);
  markdown += readResponse(method?.response);
  markdown += `\n`;
  markdown += `⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃\n`;

  return markdown;
}

/**
 * Read items of json postman
 * @param {Array} items
 */
export function readItems(items: any[], folderDeep = 1) {
  let markdown = "";
  items.forEach((item) => {
    if (item.item) {
      markdown += `${"#".repeat(folderDeep)} 📁 Collection: ${item.name} \n`;
      markdown += readItems(item.item, folderDeep + 1);
    } else {
      markdown += readMethods(item);
    }
  });

  return markdown;
}

export default {
  readAuthorization,
  readRequestOptions,
  readFormDataBody,
  readQueryParams,
  readResponse,
  readMethods,
  readItems,
};
