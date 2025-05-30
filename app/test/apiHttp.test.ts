import axios from "axios";

test("get test", async () => {
    const responseData = await axios.get("http://localhost:3000/block");
    const response = responseData.data[responseData.data.length - 1]
    expect(typeof response.block_hash).toBe("string");
});
