import { fizzbuzz } from "./fizzbuz";

describe("fizzbuzz", () => {
  it("should print fizz if divisable by 3", () => {
    // Given
    const input = 3;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe("fizz");
  });

  it("should print fizz if not divisable by 6", () => {
    // Given
    const input = 6;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe("fizz");
  });

  it("should print buzz if divisable by 5", () => {
    // Given
    const input = 5;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe("buzz");
  });

  it("should print buzz if divisable by 10", () => {
    // Given
    const input = 10;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe("buzz");
  });

  it("should print the input if not divisable by 3 or 5", () => {
    // Given
    const input = 4;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe(input);
  });

  it("should print fizzbuzz if divisable by 3 and 5", () => {
    // Given
    const input = 15;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe("fizzbuzz");
  });

  it("should print fizzbuzz if divisable by 3 and 5", () => {
    // Given
    const input = 0;

    // When
    const result = fizzbuzz(input);

    // Then
    expect(result).toBe(input);
  });
});
