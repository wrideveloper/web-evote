import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import CardHarapan from '../../../../components/Card/CardHarapan'
import axios from 'axios'

const HarapanSaran = () => {

    const [harapan, setHarapan] = useState([])

    async function getHarapan() {
        try {
            const response = await axios.get('https://evote.ceban-app.com/vote');
            setHarapan(response.data)
            // console.log("Halo ini Data Calon", response.data);
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        getHarapan()
    })

    const history = useHistory()
    return (
        <>
            <Button className="mb-3" style={{ backgroundColor: '#3F3D56' }} onClick={() => history.goBack()}>Kembali</Button>
            {
                harapan.map((listHarapan) => (
                    <>
                        <CardHarapan
                            name={listHarapan.nama_pemilih}
                            saran={listHarapan.harapan}
                        />
                    </>
                ))
            }
        </>
    )
}

export default HarapanSaran
