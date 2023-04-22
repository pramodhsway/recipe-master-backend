import {createAddressDao, findAllAddressesDao} from "../../Dao/AddressDao.js";

const AddressController = (app) => {
  app.get('/api/address/status', (req, res) => {
    res.json({"status": 'Address Controller API is up and running!'})
  });

  app.get("/api/address", async (req, res) => {
    const address = await findAllAddressesDao();
    res.json(address);
  });
  app.post("/api/address", async (req, res) => {
    const address = await createAddressDao(req.address);
    res.json(address);
  });
};
export default AddressController;
