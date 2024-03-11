import { SelectHTMLAttributes } from "react";
type SelectProps = {
  className: string;
  options: string[];
  hasError?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;


export default function Select({ className, options, hasError = false, ...props }: SelectProps) {
  return (
    <div className={className}>
      <div className="input">
        <select className={hasError ? "hs-input invalid error" : "hs-input"} {...props}>
          { options.map((option) => <option key={option} value={option}>{option}</option>) }
        </select>
      </div>
      {hasError && <ul className="no-list hs-error-msgs inputs-list" role="alert">
        <li>
          <label className="hs-error-msg">
            Please complete this required field.
          </label>
        </li>
      </ul>}
    </div>
  );
}