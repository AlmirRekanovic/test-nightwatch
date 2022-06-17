

describe('Verify that user can manage Sphere', function() {
    this.tags = ['sphere'];

    test('Sphere', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Sphere");
        //Value for Radius goes from 0.1 to 1
        dashboardPage.setRadius("1")
        //Value for Width Segments goes from 3 to 32
        dashboardPage.setWidthSegments("20");
        //Value for Height Segments goes from 2 to 32
        dashboardPage.setHeightSegments("20");
        dashboardPage.setColor("Sphere", "#000000");
        client.percySnapshot('Sphere');
    })
});
