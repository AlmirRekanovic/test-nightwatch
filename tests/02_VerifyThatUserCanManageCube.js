

describe('Verify that user can manage cube', function() {
    this.tags = ['cube'];

    test('Cube', client => {
        let loginPage = client.page.login().navigate();
        let dashboardPage = client.page.dashboard();

        dashboardPage.selectGeometry("Cube");
        //Value for Width goes from 0.1 to 2
        dashboardPage.setWidth("1");
        //Value for Height goes from 0.1 to 2
        dashboardPage.setHeight("1");
        //You can use which ever you want hex code to set the color
        dashboardPage.setColor("Cube", "#000000");
        client.percySnapshot('Cube');

    })
});
