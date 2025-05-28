import axios from "axios";

test("get test", async () => {
    const responseData = await axios.get("http://localhost:3000/");
    const response = responseData.data;
    expect(response).toBe("Olá, Http aqui");
});