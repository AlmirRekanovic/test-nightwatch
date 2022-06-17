

describe('Verify that user can manage ending of Cone', function() {
    this.tags = ['op-cone'];

    test('Opened Cone', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cone");
        dashboardPage.isOpenEnded("True")
        client.percySnapshot('op-end-cone');

    })
});
