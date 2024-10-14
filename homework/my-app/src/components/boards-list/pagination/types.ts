import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

export interface IPaginationProps {
  //타입이 복잡하므로 onClickRefetch등의 함수로 감싸서 전달하면 편함
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  lastPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}