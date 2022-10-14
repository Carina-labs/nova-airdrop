import axios from "axios";
const novaRestUrl = "https://nova-rest.dev-supernova.xyz";
const api = axios.create({
  baseURL: novaRestUrl,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export type ClaimableResponse = {
  data: ClaimableAssets;
};

export type ClaimableAssets = {
  total_assets: {
    denom: string;
    amount: string;
  };
};
export const getClaimable = async (address: string) => {
  const response = await api.get<ClaimableAssets>(
    "/nova/airdrop/v1/total_asset_for_airdrop",
    {
      params: { address: address },
    }
  );
  return response.data;
};
