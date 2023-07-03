import { ChangeEventHandler, FC } from "react";
import classNames from "classnames";

interface Props {}

const commonInput =
  "w-full bg-transparent outline-none border-2 border-secondary-dark dark:border-primary focus:border-primary-dark rounded transition text-primary-dark dark:text-primary p-2";

const Input: FC<{
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string
  onChange?: ChangeEventHandler<HTMLInputElement>;
}> = ({ name, value, placeholder, label, onChange }) => {
  return (
    <label className="block relative">
      <span className="absolute top-1/2 -translate-y-1/2 text-sm font-semibold text-primary-dark dark:text-primary pl-2">
        {label}
      </span>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={classNames(commonInput, "italic pl-11")}
        onChange={onChange}
      />
    </label>
  );
};

const SeoForm: FC<Props> = (props): JSX.Element => {
  return (
    <div className="space-y-4">
      <h1 className="text-primary-dark dark:text-primary text-xl font-semibold">
        SEO Section
      </h1>
      <Input name="slug" placeholder="slug-goes-here" label="Slug:" />
      <Input name="slug" placeholder="React, Next JS" label="Tags:" />
      <textarea className={classNames(commonInput, "text-lg h-20 resize-none")} placeholder="Meta description"></textarea>
    </div>
  );
};

export default SeoForm;
