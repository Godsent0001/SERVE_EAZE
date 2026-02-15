import mockServices from "../../../components/services.mock";

export const getServiceById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServices.find((s) => s.id === id));
    }, 300);
  });
};
