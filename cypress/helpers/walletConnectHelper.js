import WalletConnect from "@walletconnect/client";

export default class WalletConnectHelper {

  constructor(uri) {
    this.connector = new WalletConnect({ uri });
  }

  async initWallet(params) {
    if (!this.connector.connected) {
      await this.connector.createSession();
      console.log('SESSION ======', this.connector.session);
    }

    this.subscribeToEvents(params);
  }

  subscribeToEvents(params) {
    this.connector.on("session_request", (error) => {
      if (error) {
        throw error;
      }

      this.aproveWallet(params.connect)
    });

    this.connector.on("connect", (error) => {
      if (error) {
        throw error;
      }
    });

    this.connector.on("disconnect", (error) => {
      if (error) {
        throw error;
      }
    })
  }

  aproveWallet(data) {
    this.connector.approveSession(data);
  }
}