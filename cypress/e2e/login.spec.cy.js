import { Decoder } from '@nuintun/qrcode'
import WalletConnectHelper from '../helpers/walletConnectHelper'

let screenshotName = '';

describe('Test User Login', () => {
  it('My test', () => {
    cy.visit('/');
    cy.contains('Connect').click();

    cy.get('.walletconnect-qrcode__image').screenshot('qrcode', {
      onAfterScreenshot($el, props) {
        screenshotName = props.path.split(/screenshots./)[1];
      }
    });
  })

  it('My test2', () => {
    const name = `screenshots/${screenshotName}`;

    cy.fixture(name, 'base64')
      .then(base64 => `data:image/png;base64,${base64}`)
      .then((imageSrc) => {
        const qrcode = new Decoder()
        return qrcode.scan(imageSrc)
      })
      .its('data')
      .then(async (data) => {
        const params = {
          connect: {
            chainId: null,
            accounts: [],
          },
        }
        const walletConnectHelper = new WalletConnectHelper(data);
        await walletConnectHelper.initWallet(params);
      })
  })
});