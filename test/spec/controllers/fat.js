'use strict';

describe('Testing BMI', function() {
  it('calculates BMI correctly', function() {
    expect(BMI(82, 1.80)).toBe(25.30864197530864);
  });
});

describe('Testing Fatmass calculation', function() {
  it('calculates fatmass correctly', function() {
    expect(Fatmass(25, 38, 82, 'man')).toBe(17.936);
  });
});

describe('Testing Fatpercent calculation', function() {
  it('calculates fatpercent correctly', function() {
    expect(Fatpercent(20, 82)).toBe(24.390243902439025);
  });
});
