import { getClaimable } from "../api/api";
import { useQuery } from "react-query";
export const useGetClaimable = (address: string) => {
  const { data, isError, error, refetch, isFetched } = useQuery(
    ["claimable", address],
    () => getClaimable(address),
    {
      enabled: false,
    }
  );
  return { data, isFetched, refetch };
};
