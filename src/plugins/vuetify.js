import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#737367',
                secondary: '#675B73',
                accent: '#C0C0BE',
                error: '#FFFFFF'
            },
            dark: {
                primary: '#675B73',
                secondary: '#737367',
                accent: '#C0C0BE',
                error: '#FFFFFF'
            }
        }
    }
});
