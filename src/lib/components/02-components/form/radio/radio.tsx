import { InputHTMLAttributes, useState } from "react";
type RadioCheckboxProps = {
  label: string;
  options: string[];
  theme?: string;
} & InputHTMLAttributes<HTMLInputElement>;


export default function RadioInput({ options, label, theme = '' }: RadioCheckboxProps) {
  const [checked, setChecked] = useState('');
  return (
    <div className={theme}>
      <div className="hs-fieldtype-booleancheckbox">
        <div className="input">
          <ul className="inputs-list">
            <li className="hs-form-booleancheckbox">
              <label className="hs-form-booleancheckbox-display">
                { label }
              </label>
            </li>
            { options.map((option, index) => (
                <li key={index}>
                  <label>
                    <input type="radio" value={option} onClick={() => setChecked(option)} checked={checked === option} />
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