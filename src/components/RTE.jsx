// import React from 'react'
// import {Editor } from '@tinymce/tinymce-react';
// import {Controller } from 'react-hook-form';


// export default function RTE({name, control, label, defaultValue =""}) {
//   return (
//     <div className="w-full">
//       {label && <label className="inline-block mb-1 pl-1">{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey="bwfcq5cgsh7r010swkjsi1upzr844yh3vhdv78yjipr5jozq"
//             initialValue={defaultValue}
//             init={{
//               initialValue: defaultValue,
//               height: 500,
//               menubar: true,
//               plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "code",
//                 "help",
//                 "wordcount",
//                 "anchor",
//               ],
//               toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//               content_style:
//                 "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }


import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
// import "./App.css";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="bwfcq5cgsh7r010swkjsi1upzr844yh3vhdv78yjipr5jozq"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        // initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}

