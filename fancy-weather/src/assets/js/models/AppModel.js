export default class AppModel {
    constructor(state) {
        this.state = state;
    }

    async getLocations() {
        const { url } = this.state;
        fetch(url)
            .then(res => res.json())
            .then(res => console.log(res));
    }
}