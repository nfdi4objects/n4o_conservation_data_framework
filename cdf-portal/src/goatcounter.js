export function onRouteDidUpdate({ location, previousLocation }) {
  if (!previousLocation || location.pathname === previousLocation.pathname) return;
  if (typeof window !== 'undefined' && window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: location.pathname });
  }
}
