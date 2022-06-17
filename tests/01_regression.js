//import {mainUser} from '../data/tests.config'
const {launch_url} = require("nightwatch/lib/settings/defaults");
module.exports = {
    'User Logs in': async (client) => {
        this.tags = ['regression'];
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cube");
        dashboardPage.setWidth("1");
        dashboardPage.setHeight("1");
        dashboardPage.setColor("Cube", "#000000");
        client.percySnapshot('Cube');

        dashboardPage.selectGeometry("Sphere");
        dashboardPage.setRadius("1");
        dashboardPage.setWidthSegments("1");
        dashboardPage.setHeightSegments("1");
        dashboardPage.setColor("Sphere", "#ff4545");
        client.percySnapshot('Red Sphere');

        dashboardPage.selectGeometry("Cylinder");
        dashboardPage.setRadiusTop("1");
        dashboardPage.setRadiusBottom("1");
        dashboardPage.setHeight("1");
        dashboardPage.isOpenEnded("True");
        client.percySnapshot('Open ended Cylinder');

        dashboardPage.selectGeometry("Cone");
        dashboardPage.setRadius("1");
        dashboardPage.setHeight("1");
        dashboardPage.setThetaStart("5");
        dashboardPage.setThetaLength("6");
        dashboardPage.isOpenEnded("False");
        client.percySnapshot('Close ended Cone');

        dashboardPage.selectGeometry("Cylinder");
        dashboardPage.isOpenEnded("True")
        client.percySnapshot('op-end-sphere');

        dashboardPage.selectGeometry("Cone");
        dashboardPage.isOpenEnded("True")
        client.percySnapshot('op-end-cone');
    }
};