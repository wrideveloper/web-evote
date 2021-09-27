import React from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import Content from '../../../components/contents/Content'
import Calon from './Calon'
import HasilPemilihan from './HasilPemilihan'
import Pemilih from './Pemilih'
const Dashboard = () => {
    const [open, setOpen] = React.useState(true)

    const handleTogle = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className="App wrapper">
            <Sidebar isOpen={open} handleTogle={handleTogle} />
            <Content sidebarIsOpen={open} togleSidebar={handleTogle}>
                <Route exact path="/admin/calon" component={Calon} />
                <Route exact path="/admin/pemilih" component={Pemilih} />
                <Route exact path="/admin/hasil-pemilihan" component={HasilPemilihan} />
            </Content>
        </div>
    )
}

export default Dashboard
