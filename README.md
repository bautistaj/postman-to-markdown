
![npm](https://img.shields.io/npm/v/postman-to-markdown?style=plastic)

# 📦  postman-to-markdown

This package generate markdown document from postman.

First export the collection from postman.

![Drag Racing](./resources/export_collection.png)

![Drag Racing](./resources/export.png)

Save the collection file.

## Install

```npm
npm install -g postman-to-markdown
```

# Usage

Execute postman-to-markdown specifying the collection file, now you can specify the directory where the .md file will be generated, this path is optional.

```bash
postman-to-markdown TwitterTracker.postman_collection.json /tmp
```

```
Reading file TwitterTracker.postman_collection.json

Generating markdown file ...

Documentation was created correctly /tmp/TwitterTracker.md
```
The package will create .md file.

Example of file generated [example.md](https://github.com/bautistaj/postman-to-markdown/blob/master/resources/example.md)

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown.git)

# License
postman-to-markdown is released under the [MIT License](https://opensource.org/licenses/MIT).