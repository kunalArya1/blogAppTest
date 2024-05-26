import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const App = () => {
  const [content, setContent] = useState("");

  const handleEditorChange = (content) => {
    setContent(content);
    console.log("Content was updated:", content);
  };

  return (
    <div>
      <h1>My  Editor</h1>
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey="6sovu607uh5qp74opzd9ovg5ofgjd1fz1ro8un5k06o2kumn"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "image",
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
            "anchor",
          ],
          toolbar:
            // "undo redo | formatselect | image | bold italic backcolor | \
            // alignleft aligncenter alignright alignjustify | \
            // bullist numlist outdent indent | removeformat | help"

            "undo redo | blocks | image | bold italic forecolor |  alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
      <div>
        <h2>Editor Content</h2>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default App;
