

describe('Verify that user can manage ending of Cone', function() {
    this.tags = ['op-cone'];

    test('Opened Cone', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cone");
        dashboardPage.isOpenEnded("True")
        client.percySnapshot('op-end-cone');

    })
});
