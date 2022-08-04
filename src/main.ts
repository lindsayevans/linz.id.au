import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      'InstrumentationKey=d999b489-4274-4a38-9526-0964fd808627;IngestionEndpoint=https://australiaeast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://australiaeast.livediagnostics.monitor.azure.com/',
  },
});
appInsights.loadAppInsights();
appInsights.trackPageView({
  properties: {
    referrer: document.referrer,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  },
});
