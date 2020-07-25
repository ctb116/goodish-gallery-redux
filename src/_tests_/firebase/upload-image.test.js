import { renderHook, act } from "@testing-library/react-hooks";
import UploadImage from "../../components/UploadImage";

// const image = { imgUrl: "" };

describe("handle image as file before firebase upload", () => {
  test("file should be image type", () => {
    const { result } = renderHook(() => UploadImage());
    // https://github.com/testing-library/react-hooks-testing-library
  });
});

//Test if image file is type of file - this is testing React Hooks
//test of the image is rendering on the page before upload
