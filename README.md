
# 📦  postman-to-markdown

Whit this package you can create markdown file from postman documentation.

First export the collection from postman.

![Drag Racing](./resources/export_collection.png)

![Drag Racing](./resources/export.png)

Save the collection file.

## Install

```npm
npm install -g postman-to-markdown
```

# Usage

Execute postman-to-markdown specifying the collection file.

```bash
postman-to-markdown TwitterTracker.postman_collection.json 
```

```
Reading file TwitterTracker.postman_collection.json
```
```
Generating markdown file ...
```
```
Documentation was created correctly TwitterTracker.md
```

The package will create .md file.

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown.git)

# License
postman-to-markdown is released under the [MIT License](https://opensource.org/licenses/MIT).