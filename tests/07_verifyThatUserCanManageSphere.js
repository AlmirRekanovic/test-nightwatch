

describe('Verify that user can manage Sphere', function() {
    this.tags = ['sphere'];

    test('Sphere', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cube");
        dashboardPage.setWidth("1");
        dashboardPage.setHeight("1");
        dashboardPage.setColor("Cube", "#000000");
        client.percySnapshot('Cube');
    })
});
