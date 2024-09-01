import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://adobe.scene7.com/is/image/AdobeCreate/DSC_ArtOfTrace_HT_0001_Trace_flat_round?$small$");
});
