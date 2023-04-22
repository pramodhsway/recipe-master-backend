import AddressModel from "../Models/AddressModel.js";
export const findAllAddressesDao = () => AddressModel.find();
export const findOneAddressDao = (address) =>
  AddressModel.findOne({
    addressLine: address.addressLine,
    addressLine2: address.addressLine2,
    city: address.city,
    state: address.state,
    zipcode: address.zipcode,
  });
export const createAddressDao = (address) => AddressModel.create(address);
export const deleteAddressAdao = (aid) => AddressModel.deleteOne({ _id: aid });
export const updateAddressAdao = (aid, address) =>
  AddressModel.updateOne({ _id: aid }, { $set: address });

export const updateUserDao = (aid, uid) =>
  AddressModel.updateOne({ _id: aid }, { $push: { users: uid } });
export const removeUserDao = (aid, uid) =>
  AddressModel.updateOne({ _id: aid }, { $pull: { users: uid } });
