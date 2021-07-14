
import dynamic from "next/dynamic"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(() => import ('react-draft-wysiwyg').then((module)=> module.Editor),{
    ssr: false,
}
);
function TextEditor() {
    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor
              toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
              editorClassName="mt-6 p-10 bg-white shadow-lg ma-w-5xl mx-auto mb-12 border"
            />
        </div>
    )
}

export default TextEditor
