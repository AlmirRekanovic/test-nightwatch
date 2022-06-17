

describe('Verify that user can manage cube', function() {
    this.tags = ['cube'];

    test('Cube', client => {
        let dashboardPage = client.page.dashboard().navigate();

        dashboardPage.selectGeometry("Cube");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setWidth("1");
        //This value is customizable and it can be changed accordingly
        dashboardPage.setHeight("1");
        //You can use which ever you want hex code to set the color
        dashboardPage.setColor("Cube", "#000000");
        client.percySnapshot('Cube');

    })
});
