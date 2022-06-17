

describe('Verify that user can manage Cone', function() {
    this.tags = ['cone'];

    test('Cone', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cone");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setRadius("1")
        //This value is customizable and it can be changed accordingly
        dashboardPage.setHeight("1");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setThetaStart("2");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setThetaLength("1");
        client.percySnapshot('Cone');

    })
});
