import { ApplicationInsights } from '@microsoft/applicationinsights-web-basic';

const appInsights = new ApplicationInsights({
  instrumentationKey: 'd999b489-4274-4a38-9526-0964fd808627',
});

appInsights.track({
  name: 'Microsoft.ApplicationInsights.AABA40BC-EB0D-44A7-96F5-ED2103E47AE9.Pageview',
  data: {
    referrer: document.referrer,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
  },
  baseType: 'PageviewData',
  baseData: {
    name: document.title,
    uri: location.href,
  },
});

appInsights.flush();
