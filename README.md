# GroupDocs.Annotation Cloud Node.js SDK
Node.js module for communicating with the GroupDocs.Annotation Cloud API

## Installation

A package `groupdocs-annotation-cloud` is available at [npmjs.com](https://www.npmjs.com/package/groupdocs-annotation-cloud). You can install it with:

```shell
npm install groupdocs-annotation-cloud
```    

## Getting Started

Please follow the [installation](#installation) procedure and then run the following JavaScript code:

```js
// load the module
var GroupDocs = require('groupdocs-annotation-cloud');

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
var appKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct AnnotationApi
var infoApi = GroupDocs.InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then(function (response) {
        console.log("Supported file-formats:")
        response.formats.forEach(function (format) {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch(function (error) {
        console.log("Error: " + error.message)
    });
```

Or compile and run same written in TypeScript:

```ts
// load the module
import { InfoApi } from "groupdocs-annotation-cloud";

// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
const appSid: string = "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX";
const appKey: string = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

// construct AnnotationApi
const infoApi: InfoApi = InfoApi.fromKeys(appSid, appKey);

// retrieve supported file-formats
infoApi.getSupportedFileFormats()
    .then((result) => {
        console.log("Supported file-formats:");
        result.formats.forEach((format) => {
            console.log(format.fileFormat + " (" + format.extension + ")");
        });
    })
    .catch((error) => {
        console.log("Error: " + error.message);
    });
```


## Licensing
GroupDocs.Annotation Cloud Node.js SDK licensed under [MIT License](LICENSE).

[Home](https://www.groupdocs.cloud/) | [Product Page](https://products.groupdocs.cloud/annotation/nodejs) | [Docs](https://docs.groupdocs.cloud/annotation/) | [Demos](https://products.groupdocs.app/annotation/family) | [API Reference](https://apireference.groupdocs.cloud/annotation/) | [Examples](https://github.com/groupdocs-annotation-cloud/groupdocs-annotation-cloud-node-samples) | [Blog](https://blog.groupdocs.cloud/category/annotation/) | [Free Support](https://forum.groupdocs.cloud/c/annotation) | [Free Trial](https://purchase.groupdocs.cloud/trial)
