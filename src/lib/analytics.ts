export type AnalyticsEvent =
  | 'cta_primary_click'
  | 'form_submit'
  | 'faq_open'
  | 'pricing_view';

export interface AnalyticsEventData {
  event: AnalyticsEvent;
  location?: string;
  index?: number;
  [key: string]: unknown;
}

export function trackEvent(data: AnalyticsEventData) {
  console.log('[Analytics]', data);

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source');
    const utm_medium = params.get('utm_medium');
    const utm_campaign = params.get('utm_campaign');

    const enrichedData = {
      ...data,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      ...(utm_source && { utm_source }),
      ...(utm_medium && { utm_medium }),
      ...(utm_campaign && { utm_campaign }),
    };

    console.log('[Analytics Enriched]', enrichedData);
  }
}

export function setupAnalytics() {
  if (typeof window === 'undefined') return;

  window.addEventListener('track', ((event: CustomEvent<AnalyticsEventData>) => {
    trackEvent(event.detail);
  }) as EventListener);

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const trackableElement = target.closest('[data-track]') as HTMLElement;

    if (trackableElement) {
      const event = trackableElement.getAttribute('data-track') as AnalyticsEvent;
      const location = trackableElement.getAttribute('data-location');

      trackEvent({
        event,
        ...(location && { location }),
      });
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const event = target.getAttribute('data-track-view') as AnalyticsEvent;

          if (event) {
            trackEvent({ event });
            observer.unobserve(target);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-track-view]').forEach((el) => {
    observer.observe(el);
  });
}
