

describe('Verify that user can manage ending of Cylinder', function() {
    this.tags = ['op-cylinder'];

    test('Opened Cylinder', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cylinder");
        dashboardPage.isOpenEnded("True")
        client.percySnapshot('op-end-cylinder');
    })
});
