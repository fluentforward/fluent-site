/** Cal.com (EU) booking — used for both the popup trigger and the inline embed. */
export const cal = {
  origin: 'https://app.cal.eu',
  scriptSrc: 'https://app.cal.eu/embed/embed.js',
  namespace: '30min',
  link: 'matthew-todd/30min',
  config: {
    layout: 'month_view',
    useSlotsViewOnSmallScreen: 'true',
    /* Passed through to the embed URL. The event type's own default is dark,
       which would drop a black calendar into an otherwise white page. */
    theme: 'light',
  },
  ui: {
    hideEventTypeDetails: false,
    layout: 'month_view',
    theme: 'light',
    cssVarsPerTheme: {
      light: {
        'cal-brand': '#0b0c0e',
      },
    },
  },
} as const

export const calConfigJson = JSON.stringify(cal.config)
