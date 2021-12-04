import React, { useState, useEffect } from 'react'
// import { Container, Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button, Label, Progress } from 'reactstrap'
import CardLayout from '../../../components/Card/CardLayout'
import ProgressBar from '../../../components/Progress/ProgressBar'
import axios from 'axios'

const Statistik = () => {
    const [totalVote, setTotalVote] = useState(0);
    const [allScore, setAllScore] = useState([]);

    useEffect(() => {
        const getTotalVote = async () => {
            try {
                const request = await axios.get('https://evote.ceban-app.com/vote/get/totalvote');
                // console.log(request)
                setTotalVote(request.data)
            } catch (error) {
                console.log(error)
            }
        }

        const getAllScore = async () => {
            try {
                const request = await axios.get('https://evote.ceban-app.com/vote/get/score');
                console.log(request.data)
                setAllScore(request.data)
            } catch (error) {
                console.log(error)
            }
        }

        getTotalVote()
        getAllScore()
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
            {
                allScore !== [] &&
                allScore.map(item => (
                    <ProgressBar max={50} value={item.total_vote} index={item.id_calon} />
                ))

            }

            <hr style={{ width: '50%', margin: '50px 0' }} />
            <div className="d-md-flex flex-wrap">
                {
                    allScore !== [] &&
                    allScore.map(item => (
                        <p style={{ marginRight: 20 }}>C{item.id_calon}: {item.nama}</p>
                    ))
                }
            </div>
        </CardLayout>
    )
}

export default Statistik
