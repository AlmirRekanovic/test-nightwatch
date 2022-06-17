

describe('Verify that user can manage Cylinder', function() {
    this.tags = ['cylinder'];

    test('Cylinder', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cylinder");
        //Value for Radius Top goes from 0.1 to 1.5
        dashboardPage.setRadiusTop("1");
        //Value for Radius Bottom goes from 0.1 to 1.5
        dashboardPage.setRadiusBottom("1");
        //Value for Height goes from 0.1 to 2
        dashboardPage.setHeight("1");
        client.percySnapshot('Cylinder');

    })
});
