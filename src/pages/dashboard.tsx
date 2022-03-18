import React from 'react'
import Charts from '../components/charts/Charts'
import Header from '../components/header/Header'
import Layout from '../components/layout/Layout'
import Sidebar from '../components/sidebar/Sidebar'
import Table from '../components/table/Table'

const dashboard = () => {
	return (
		 <Layout>
      <Charts/>
      <Table/>
		 </Layout>
	)
}

export default dashboard