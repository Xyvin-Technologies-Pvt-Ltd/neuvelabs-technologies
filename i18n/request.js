import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  // Try to get locale from cookie first
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value;

  // Fall back to Accept-Language header
  if (!locale) {
    const headerStore = await headers();
    const acceptLanguage = headerStore.get('accept-language');
    if (acceptLanguage?.includes('ar')) {
      locale = 'ar';
    }
  }

  // Default to English
  locale = locale || 'en';

  // Validate locale
  const supportedLocales = ['en', 'ar'];
  if (!supportedLocales.includes(locale)) {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});





