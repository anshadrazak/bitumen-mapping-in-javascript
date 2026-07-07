class BitumenMap {
  constructor(options = {}) {
    this.options = {
      viscosity: options.viscosity ?? 0.8,
      thermalBinding: options.thermalBinding ?? false,
      fractureThreshold: options.fractureThreshold ?? 10,
    };

    this.state = null;
    this.overlay = null;
  }

  bind(state) {
    this.state = state;
    return this;
  }

  createOverlay(layer = {}) {
    this.overlay = {
      timestamp: Date.now(),
      layer,
    };

    return this.overlay;
  }

  asphaltMerge() {
    if (!this.state || !this.overlay) {
      throw new Error("Call bind() and createOverlay() first.");
    }

    return {
      merged: true,
      state: this.state,
      overlay: this.overlay,
      viscosity: this.options.viscosity,
    };
  }
}

module.exports = BitumenMap;
