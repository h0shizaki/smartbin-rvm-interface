import {useLocale, useTranslations} from 'next-intl';
import Selector from './Selector';
import {locales} from '@/config';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    console.log(locale)

    return (
        <Selector defaultValue={locale} label={t('label')}>
            {locales.map((cur) => (
                <option key={cur} value={cur}>
                    {t('locale', {locale: cur})}
                </option>
            ))}
        </Selector>
    );
}