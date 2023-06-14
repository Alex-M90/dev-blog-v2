import DropdownOptions from "@/components/common/DropdownOptions";
import { Editor } from "@tiptap/react";
import { FC } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  editor: Editor | null;
}

const ToolBar: FC<Props> = ({ editor }): JSX.Element | null => {
  if (!editor) return null;

  const options = [
    {
      label: "Paragraph",
      onClick: () => {
        console.log("paragraph clicked");
      },
    },
    {
      label: "Heading 1",
      onClick: () => {
        console.log("heading 1 clicked");
      },
    },
    {
      label: "Heading 2",
      onClick: () => {
        console.log("heading 2 clicked");
      },
    },
    {
      label: "Heading 3",
      onClick: () => {
        console.log("heading 3 clicked");
      },
    },
  ];

  const Head = () => {
    return <div className="flex">
        <p>Paragraph</p>
        <AiFillCaretDown />
    </div>
  }

  // heading 1, 2, 3 "bold" "italic" "underline" "strike" "quote" "code" "code-block" "insert-link" "lists (ol and ul)" "embed youtube" "insert image"

  return (
    <div>
      {/* paragraph , heading 1, 2, 3 */}
      <DropdownOptions
        options={options}
        head={<Head />}
      />
    </div>
  );
};

export default ToolBar;
