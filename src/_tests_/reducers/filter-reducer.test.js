import filterReducer from "../../reducers/filter-reducer";

describe("filterReducer", () => {
  test("should return default state of filter as all false but mature true", () => {
    expect(filterReducer({}, { type: null })).toEqual({});
  });
});
