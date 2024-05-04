import { describe, test, expect } from "vitest";
import { getInitials } from "./helpers";

describe("Helper", () => {
  describe("Get initials", () => {
    test("Should return the initials if the name is provided", () => {
      const name = "Brayan Mora";
      const initials = getInitials(name);

      expect(initials).toBe("BM");
    });

    test("Should return the initials if the name is separated by a dash", () => {
      const name = "Brayan-Mora";
      const initials = getInitials(name);

      expect(initials).toBe("BM");
    });

    test("Should return the initials if the name is separated by a *", () => {
      const name = "Brayan*Mora";
      const initials = getInitials(name);

      expect(initials).toBe("BM");
    });

    test("Should return the initials if is only one word", () => {
      const name = "Brayan";
      const initials = getInitials(name);

      expect(initials).toBe("B");
    });

    test("Should return the initials if the name is empty", () => {
      const name = "";
      const initials = getInitials(name);

      expect(initials).toBe("");
    });

    test("Should return the initials if the name is undefined", () => {
      const name = undefined;
      const initials = getInitials(name!);

      expect(initials).toBe("");
    });

    test("Should return initials in all caps when the name is in lowercase", () => {
      const name = "brayan mora";
      const initials = getInitials(name);

      expect(initials).toBe("BM");
    });
  });
});
