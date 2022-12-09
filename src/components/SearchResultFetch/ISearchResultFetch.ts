import { Dispatch, SetStateAction } from 'react';

interface ISearchResultFetch {
  url: string;
  min: boolean;
  setShowShadow: Dispatch<SetStateAction<boolean>>;
}
export default ISearchResultFetch;
