import { useState, useEffect } from 'react';
import convertHexToRGB from '../convertHexToRGB';

export default function Converter() {
  const [form, setForm] = useState({ hex: '', rgb: '' });

  useEffect(() => {
    document.body.style.backgroundColor = form.rgb;
  }, [form.rgb])

  function handleInputChange(event) {
    const { value } = event.target;

    setForm(prevForm => ({ ...prevForm, hex: value }));

    if (/^#[\dA-Fa-f]{6}$/.test(value)) {
      setForm(prevForm => ({ ...prevForm, rgb: convertHexToRGB(value) }));
    } else if (value.length === 7) {
      setForm(prevForm => ({ ...prevForm, rgb: 'Ошибка!' }));
    }
  }

  return (
    <form className="converter-form" onInput={handleInputChange}>
      <input
        className="converter-input"
        type="text"
        name="hex"
        maxLength="7"
        autoComplete="off"
        autoFocus
        defaultValue={form.hex}
      />
      <output
        className="converter-output"
        type="text"
        name="rgb"
        style={{ backgroundColor: form.rgb }}
      >
        <span
          className="converter-output-text"
          style={{ color: form.rgb }}
        >
          {form.rgb}
        </span>
      </output>
    </form>
  );
}