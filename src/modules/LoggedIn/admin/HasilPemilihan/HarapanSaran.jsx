import React from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import CardHarapan from '../../../../components/Card/CardHarapan'

const HarapanSaran = () => {
    const history = useHistory()
    return (
        <>
            <Button className="mb-3" style={{ backgroundColor: '#3F3D56' }} onClick={() => history.goBack()}>Kembali</Button>
            <CardHarapan
                name='Adelina Indra'
                harapan='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
                saran='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
            />
            <CardHarapan
                name='Adelina Indra'
                harapan='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
                saran='Lorem ipsum dolor sit amet, consectur adipiscing elit. Fermentum nibh cum nibh suspendisse porta amet et. Integer at vel vel, velit ultrices tristique sed.'
            />
        </>
    )
}

export default HarapanSaran
