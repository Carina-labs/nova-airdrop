import { fromBech32, toBech32 } from "@cosmjs/encoding";
import axios from "axios";
import { CLAIMABLE_QUERY_PATH, NOVA_REST_URL } from "../config";
const api = axios.create({
  baseURL: NOVA_REST_URL,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export type ClaimableAssets = {
  total_assets: {
    denom: string;
    amount: string;
  };
};
export const getClaimable = async (address: string) => {
  const novaAddress = toBech32("nova", fromBech32(address).data);
  const response = await api.get<ClaimableAssets>(CLAIMABLE_QUERY_PATH, {
    params: { address: novaAddress },
  });
  return response.data;
};
