import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store';


export const useEiteckDispatch: () => AppDispatch = useDispatch;
export const useEiteckSelector: TypedUseSelectorHook<RootState> = useSelector;