

describe('Verify that user can manage ending of Cylinder', function() {
    this.tags = ['op-cylinder'];

    test('Opened Cylinder', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cylinder");
        dashboardPage.isOpenEnded("True")
        client.percySnapshot('op-end-cylinder');
    })
});
