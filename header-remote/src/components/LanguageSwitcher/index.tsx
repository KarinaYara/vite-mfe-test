import React, { FC } from 'react';
import classnames from 'classnames';

import { languages, Language } from '../../utils/languageTypes';

export interface LanguageSwitchProps {
    language: Language;
    onChange?: (Language: Language) => void;
}

const LanguageSwitcher: FC<LanguageSwitchProps> = ({ language, onChange }) => (
    <div className="grow flex justify-end gap-2">
    {languages.map(lang => (
      <button
        key={lang}
        onClick={() => onChange?.(lang)}
        className={classnames('border-2 rounded-md px-4 py-1 hover:bg-blue-50', { 'bg-blue-200': lang === language })}
      >
        {lang}
      </button>
    ))}
  </div>
)

export default LanguageSwitcher;
    