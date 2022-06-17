
const pageCommands = {

  setWidth(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Width"]/..//span[@data-index="1"]')
        .click(`//div[text()="Width"]/..//span[@data-index="${value}"]`);
  },

  setHeight(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Height"]/..//span[@data-index="1"]')
        .click(`//div[text()="Height"]/..//span[@data-index="${value}"]`);
  },

  setRadius(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Radius"]/..//span[@data-index="1"]')
        .click(`//div[text()="Radius"]/..//span[@data-index="${value}"]`);
  },

  setWidthSegments(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Width segments"]/..//span[@data-index="1"]')
        .click(`//div[text()="Width segments"]/..//span[@data-index="${value}"]`);
  },

  setHeightSegments(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Height segments"]/..//span[@data-index="1"]')
        .click(`//div[text()="Height segments"]/..//span[@data-index="${value}"]`);
  },

  setRadiusTop(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Radius top"]/..//span[@data-index="1"]')
        .click(`//div[text()="Radius top"]/..//span[@data-index="${value}"]`);
  },

  setRadiusBottom(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Radius bottom"]/..//span[@data-index="1"]')
        .click(`//div[text()="Radius bottom"]/..//span[@data-index="${value}"]`);
  },

  setThetaStart(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Theta start"]/..//span[@data-index="1"]')
        .click(`//div[text()="Theta start"]/..//span[@data-index="${value}"]`);
  },

  setThetaLength(value) {
    this.api.useXpath();
    this.waitForElementVisible('//div[text()="Theta length"]/..//span[@data-index="1"]')
        .click(`//div[text()="Theta length"]/..//span[@data-index="${value}"]`);
  },

  selectGeometry(value) {
    this.api.useCss();
    this.waitForElementVisible(this.elements.geometryDropdown)
        .click(this.elements.geometryDropdown)
        .setValue(this.elements.geometryDropdown,value)
        .waitForElementVisible(this.elements.geometrySelector)
        .click(this.elements.geometrySelector);
  },

  setColor(geometry, value){

    if(geometry=="Cube"){
      this.waitForElementVisible(this.elements.colorCubePicker)
          .click(this.elements.colorCubePicker)
          .clearValue(this.elements.colorCubePicker)
          .setValue(this.elements.colorCubePicker,value);
    }
    else {
      this.waitForElementVisible(this.elements.colorSpherePicker)
          .click(this.elements.colorSpherePicker)
          .clearValue(this.elements.colorSpherePicker)
          .setValue(this.elements.colorSpherePicker,value);
    }

  },

  isOpenEnded(value){
    if(value=="True"){
      this.waitForElementVisible(this.elements.openEndedCheckbox)
          .click(this.elements.openEndedCheckbox);
    }
  },
};

module.exports = {
  url: 'http://localhost:3000/',
  commands: [pageCommands],
  elements: {
    geometryDropdown: {
      selector: 'input[id="combo-box-demo"]'
    },
    geometrySelector: {
      selector: 'li[id="combo-box-demo-option-0"]'
    },
    colorCubePicker: {
      locateStrategy: 'xpath',
      selector: '//div[@class="colorpicker"]/input'
    },
    colorSpherePicker: {
      locateStrategy: 'xpath',
      selector: '//div[@class="resposive colorpicker"]/input'
    },
    openEndedCheckbox: {
      locateStrategy: 'xpath',
      selector: '//input[@type="checkbox"]/..'
    },
    canvas: {
      selector: 'div[id="canvas"]'
    },
  }
};