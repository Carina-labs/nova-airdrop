import { ClaimableAssets, getClaimable } from "../api/api";
import { useQuery } from "react-query";
export const useGetClaimable = (address: string) => {
  const { data, isError, error } = useQuery(
    ["claimable", address],
    () => getClaimable(address),
    {
      enabled: !address,
    }
  );
};
