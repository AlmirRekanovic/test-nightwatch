describe('Verify that user can undo values', function() {
    this.tags = ['cube-undo-values'];

    test('Undo values', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cube");
        dashboardPage.setWidth("1");
        dashboardPage.setHeight("1");
        dashboardPage.setWidth("3");
        dashboardPage.setHeight("3");
        dashboardPage.setWidth("1");
        dashboardPage.setHeight("1");
        client.percySnapshot('Cube - undo values');

    })
});