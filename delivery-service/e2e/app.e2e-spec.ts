import { DeliveryServicePage } from './app.po';

describe('delivery-service App', () => {
  let page: DeliveryServicePage;

  beforeEach(() => {
    page = new DeliveryServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
