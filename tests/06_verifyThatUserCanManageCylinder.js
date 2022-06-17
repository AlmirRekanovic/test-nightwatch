

describe('Verify that user can manage Cylinder', function() {
    this.tags = ['cylinder'];

    test('Cylinder', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cylinder");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setRadiusTop("1");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setRadiusBottom("1");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setHeight("1");
        client.percySnapshot('Cylinder');

    })
});
