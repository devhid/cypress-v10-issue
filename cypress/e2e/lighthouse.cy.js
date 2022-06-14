const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;

const mobileConfig = {
    formFactor: "mobile",
    screenEmulation: {
        mobile: true,
        width: 360,
        height: 640,
        deviceScaleFactor: 2.625,
        disabled: false,
    },
    throttling: {
        rttMs: 150,
        throughputKbps: 1.6 * 1024,
        requestLatencyMs: 150 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
        downloadThroughputKbps:
            1.6 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
        uploadThroughputKbps: 750 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
        cpuSlowdownMultiplier: 4,
    },
};

const desktopConfig = {
    formFactor: "desktop",
    screenEmulation: {
        width: 1350,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disabled: false,
    },
    throttling: {
        rttMs: 40,
        throughputKbps: 10 * 1024,
        cpuSlowdownMultiplier: 1,
        requestLatencyMs: 0,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
    },
};

const thresholds = {
    "accessibility": 80,
    "best-practices": 70,
    "performance": 60,
};

describe("Lighthouse", () => {
  describe('Lighthouse - Mobile', () => {
    it('should check scores on google.com', () => {
        cy.visit('https://google.com');

        cy.lighthouse(thresholds, mobileConfig);
    });
    it('should check scores on facebook.com', () => {
        cy.visit('https://facebook.com');

        cy.lighthouse(thresholds, mobileConfig);
    });
    it('should check scores on amazon.com', () => {
        cy.visit('https://amazon.com');

        cy.lighthouse(thresholds, desktopConfig);
    });
    it('should check scores on instagram.com', () => {
        cy.visit('https://instagram.com');

        cy.lighthouse(thresholds, mobileConfig);
    });
});

describe('Lighthouse - Desktop', () => {
    it('should check scores on google.com', () => {
        cy.visit('https://google.com');

        cy.lighthouse(thresholds, desktopConfig);
    });
    it('should check scores on facebook.com', () => {
        cy.visit('https://facebook.com');

        cy.lighthouse(thresholds, desktopConfig);
    });
    it('should check scores on amazon.com', () => {
        cy.visit('https://amazon.com');

        cy.lighthouse(thresholds, desktopConfig);
    });
    it('should check scores on instagram.com', () => {
        cy.visit('https://instagram.com');

        cy.lighthouse(thresholds, desktopConfig);
    });
});
});
