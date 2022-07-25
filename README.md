[![npm](https://img.shields.io/npm/v/postman-to-markdown.svg?style=for-the-badge\&color=f14041)][3]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge\&color=ff69b4)][4]

# 📦 postman-to-markdown

This package generates a Markdown document from a Postman collection. Postman is
an API development environment that makes sending API requests very easy.

**[Website](https://crypto-service.co) • [Documentation](https://crypto-service/docs/) 
• [Report Bug](https://github.com/sebastienrousseau/crypto-service/issues) 
• [Request Feature](https://github.com/sebastienrousseau/crypto-service/issues) 
• [Contributing Guidelines](https://github.com/sebastienrousseau/crypto-service/blob/master/.github/CONTRIBUTING.md)**

***

## Getting Started

👉 Before you begin: » Make sure you have downloaded [Postman][1] and installed
it on your computer. Alternatively, you can sign up to use the [web version][2]
of Postman.

- First export the collection from Postman.

![Drag Racing][5]

- Save the collection file.

![Drag Racing][6]

## Install

```npm
npm install -g postman-to-markdown
```

## Usage

Execute postman-to-markdown specifying the collection file.

```bash
postman-to-markdown postman_collection.json 
```

```bash
Reading file examples/postman_collection.json
Generating markdown file ...
Documentation was created correctly examples/postman_collection.md

```
The package will create an .md file.

Example of file generated
[postman_collection.md](examples/postman_collection.md)

## Contributing
If someone wants to add or improve something, I invite you to collaborate
directly in this repository: 
[postman-to-markdown](https://github.com/bautistaj/postman-to-markdown.git)

## License
postman-to-markdown is released under the
[MIT License](https://opensource.org/licenses/MIT).

[contributors-shield]: https://img.shields.io/github/contributors/bautistaj/postman-to-markdown.svg?style=for-the-badge
[contributors-url]: https://github.com/bautistaj/postman-to-markdown/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/bautistaj/postman-to-markdown.svg?style=for-the-badge
[forks-url]: https://github.com/bautistaj/postman-to-markdown/network/members

[1]: https://www.postman.com/downloads/
[2]: https://www.postman.com/
[3]: https://www.npmjs.com/postman-to-markdown
[4]: https://opensource.org/licenses/MIT
[5]: https://raw.githubusercontent.com/bautistaj/postman-to-markdown/master/resources/export_collection.png
[6]: https://raw.githubusercontent.com/bautistaj/postman-to-markdown/master/resources/export.png
