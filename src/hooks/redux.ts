import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'

import { AppDuspatch, TypeRootState } from 'src/store/store'

export const useTypedDispatch = () => useDispatch<AppDuspatch>()
export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
