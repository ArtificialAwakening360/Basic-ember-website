import Route from '@ember/routing/route';

export default class EntitiesRoute extends Route {
    model() {
        return ['Max Planck', 'Albert Einstein', 'Nikolas Tesla',
                'Charles Darwin', 'Edwin Hubble', 'Isaac Newton',
                'Erwin Schrodinger'];
    }
}
