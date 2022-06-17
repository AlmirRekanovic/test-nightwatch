

describe('Verify that user can manage Cone', function() {
    this.tags = ['cone'];

    test('Cone', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cone");
        //Value for Radius goes from 0.1 to 1.5
        dashboardPage.setRadius("1")
        //Value for Height goes from 0.5 to 2
        dashboardPage.setHeight("1");
        //Value for Theta Start goes from 0 to 2
        dashboardPage.setThetaStart("1");
        //Value for Theta Length goes from 0 to 2
        dashboardPage.setThetaLength("1");
        client.percySnapshot('Cone');

    })
});
