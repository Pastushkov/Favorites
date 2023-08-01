import { CircularProgress } from '@mui/material'
import React, {FC} from 'react'
import { Wrapper } from './style'

interface IProps {
    isLoading: boolean
    children: any
}

const Loader: FC<IProps>= ({children,isLoading})=> {
     return (
        <> {isLoading ? <Wrapper><CircularProgress /></Wrapper> : children}</>
     )
}
export default Loader