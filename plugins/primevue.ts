/* =========================================================================================
    File Name: primeVue.ts
    Description: primeVue  Component in uicomponent 
    Component Name: primeVue component
    ----------------------------------------------------------------------------------------
    Item Company: Fanam 
      Author: pooria vakili

==========================================================================================
*/
import PrimeVue from "primevue/config";
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import SplitButton from 'primevue/splitbutton';
import Image from 'primevue/image';
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true });
    nuxtApp.vueApp.component("Sidebar", Sidebar);
    nuxtApp.vueApp.component("Button", Button);
    nuxtApp.vueApp.component("SplitButton", SplitButton);
    nuxtApp.vueApp.component("image", Image);

    //other components that you need
});