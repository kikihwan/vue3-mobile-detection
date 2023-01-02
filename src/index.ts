import type { App } from "vue";
import is_mobile_func from "is-mobile";

export default {
  install: function(app: App, options: any) : void {
    app.config.globalProperties.$isMobile = is_mobile_func;
  }
}

function useMobileDetection() {
  const isMobile = is_mobile_func;
  return { isMobile };
}

export { useMobileDetection };
