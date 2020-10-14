/*
* The MIT License (MIT)
*
* Copyright (c) 2003-2020 Aspose Pty Ltd
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";
import * as TestContext from "../test_context";
import { TestFile } from "../test_file";
import { GetPagesRequest, DeletePagesRequest } from "../../src/model";

describe("preview_api", () => {
    
    before(async () => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = "0"
        await TestContext.uploadTestFiles();
    });

    afterEach(async function() {
        await TestContext.cleanupTempFiles();
    });
    

    it("test_get_delete_pages", async () => {            
        const previewApi = TestContext.getPreviewApi();
        const testFiles = TestFile.GetTestFilesPreview();
        for(let i=0; i<testFiles.length; i++) {
            let file = testFiles[i];
            //console.log("test_get_delete_pages: " + file.GetPath());
            const response = await previewApi.getPages(new GetPagesRequest(file.GetPath(), undefined, undefined, undefined, undefined, undefined, undefined, file.password));
            expect(response.totalCount).greaterThan(0);            
            expect(response.entries.length).greaterThan(0);
            await previewApi.deletePages(new DeletePagesRequest(file.GetPath()));
        }
    });

});
