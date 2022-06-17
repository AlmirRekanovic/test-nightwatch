describe('Verify that user can change values multiple times', function() {
    this.tags = ['cube-multiple-values'];

    test('Cube-Value', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cube");
        dashboardPage.setWidth("1");
        dashboardPage.setHeight("1");
        dashboardPage.setWidth("3");
        dashboardPage.setHeight("3");
        client.percySnapshot('Cube - multiple values');

    })
});