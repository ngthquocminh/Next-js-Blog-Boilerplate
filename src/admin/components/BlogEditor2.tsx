import React, { useRef } from 'react';

import dynamic from 'next/dynamic';
import SunEditorCore from 'suneditor/src/lib/core';

import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import ImageUploader from './ImageUploader';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

const BlogEditor2 = (props: any) => {
  const editor = useRef<SunEditorCore>();
  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const onImageSelect = (image: any) => {
    console.log(image, props);
  };

  return (
    <div className="w-full">
      <form className="w-2/3 px-20 py-32">
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-800 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <ImageUploader
            lable={'Thumbnail'}
            onImage={onImageSelect}
          ></ImageUploader>
        </div>
        <div className="mb-6">
          <label
            htmlFor=""
            className="block text-lg font-medium text-gray-800 mb-1"
          >
            Content
          </label>
          <SunEditor
            setOptions={{
              buttonList: [
                ['font', 'fontSize', 'formatBlock'],
                [
                  'bold',
                  'underline',
                  'italic',
                  'strike',
                  'subscript',
                  'superscript',
                ],
                ['align', 'horizontalRule', 'list', 'table'],
                ['fontColor', 'hiliteColor'],
                ['outdent', 'indent'],
                ['undo', 'redo'],
                ['removeFormat'],
                ['outdent', 'indent'],
                ['link', 'image'],
                ['preview', 'print'],
                ['fullScreen', 'showBlocks', 'codeView'],
              ],
            }}
            getSunEditorInstance={getSunEditorInstance}
            height="60vh"
          />
        </div>
      </form>
    </div>
  );
};
export default BlogEditor2;
