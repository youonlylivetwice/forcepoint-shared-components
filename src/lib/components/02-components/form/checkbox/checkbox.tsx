import { InputHTMLAttributes } from "react";
type CheckBoxInputProps = {
  options: string[];
  label: string;
  checked: boolean;
  theme?: string;
} & InputHTMLAttributes<HTMLInputElement>;


export default function CheckBoxInput({ label, options, theme = '' }: CheckBoxInputProps) {
  return (
    <div className={theme}>
      <div className="hs-fieldtype-checkbox">
        <div className="input">
          <ul className="inputs-list">
            <li className="hs-form-checkbox">
              <label className="hs-form-checkbox-display">
                { label }
              </label>
            </li>
            { options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input type="checkbox" value={option} />
                    { option }
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}