import React, { useState, useEffect } from 'react'
// import { Container, Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button, Label, Progress } from 'reactstrap'
import CardLayout from '../../../components/Card/CardLayout'
import ProgressBar from '../../../components/Progress/ProgressBar'
import axios from 'axios'

const Statistik = () => {
    const [totalVote, setTotalVote] = useState(0);

    useEffect(() => {
        const getTotalVote = async () => {
            try {
                const request = await axios.get('https://evote.ceban-app.com/vote/get/totalvote');
                // console.log(request.data)
                setTotalVote(request.data)
            } catch (error) {
                console.log(error)
            }
        }

        getTotalVote()
    }, [])

    const Footer = (
        <h6>Total Vote: {totalVote.length === 1 && totalVote[0].total_vote}</h6>
    )

    return (
        <CardLayout
            titlePage="Hasil Voting Sementara"
            titleCard="Voting Sementara"
            footer={Footer}
        >
            <ProgressBar max={100} value={86} />
            <ProgressBar max={100} value={20} />
            <ProgressBar max={100} value={80} />
            <hr style={{ width: '50%', margin: '50px 0' }} />
            <div className="d-md-flex">
                <p>C1: Shawn Mendes</p>
                <p style={{ marginLeft: 20 }}>C2: Naufal Yukafi</p>
            </div>
        </CardLayout>
    )
}

export default Statistik
