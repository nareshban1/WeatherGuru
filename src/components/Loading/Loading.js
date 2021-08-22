import React from 'react'
import { OrbitSpinner } from 'react-epic-spinners'
import { LoadingContainer } from '../StyledComponents/Styled'


function Loading() {
    return (
        <LoadingContainer>
                <OrbitSpinner color="red"/>
        </LoadingContainer>
    )
}

export default Loading
