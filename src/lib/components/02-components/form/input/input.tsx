import { InputHTMLAttributes } from "react";
type TextInputProps = {
  className: string;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;


export default function TextInput({ className, hasError = false, ...props }: TextInputProps) {
  return (
    <div className={className}>
      <div className="input">
        <input className={hasError ? 'hs-input invalid error' : 'hs-input'} {...props} />
      </div>
      {hasError && <ul className="no-list" role="alert">
        <li>
          <label className="hs-error-msg">
            Please complete this required field.
          </label>
        </li>
      </ul>}
    </div>
  );
}
