import React from 'react'
import { OrbitSpinner } from 'react-epic-spinners'
import { LoadingContainer } from '../StyledComponents/Styled'


function Loading() {
    return (
        <LoadingContainer>
            <OrbitSpinner color="#FFD369" />
        </LoadingContainer>
    )
}

export default Loading
