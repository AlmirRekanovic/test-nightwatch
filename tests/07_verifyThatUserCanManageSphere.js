

describe('Verify that user can manage Sphere', function() {
    this.tags = ['sphere'];

    test('Sphere', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Sphere");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setRadius("1")
        //This value is customizable and it can be changed accordingly
        dashboardPage.setWidthSegments("1");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setHeightSegments("1");
        dashboardPage.setColor("Sphere", "#000000");
        client.percySnapshot('Sphere');
    })
});
