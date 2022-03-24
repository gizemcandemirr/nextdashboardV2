import React from 'react'
import Layout from '../../components/layout/Layout'
import Table from '../../components/table/Table'



const HeaderName=[ "ID", "Name", "Role", "Email", "Phone", "Person Since", "Last Update", "Status", "Action"	]
const userList= [{
			"ID": "1",
			"Name": "Gizem Candemir",
			"Role": "Developer",
			"Email": "gizem.candemir@secilstore.com",
			"Phone": "5514445666",
			"Personsince": "Jul,18,20222",
			"Lastupdate": "Jul,19,20222",
			"Status": "Active"
	},
	{
		"ID": "2",
		"Name": "Korhan Afşar",
		"Role": "UI/UX",
		"Email": "korhan.afsar@secilstore.com",
		"Phone": "5514445663",
		"Personsince": "Jul,18,20222",
			"Lastupdate": "Jul,19,20222",
		"Status": "Active"
},
{
	"ID": "3",
	"Name": "Anıl Dikmen",
	"Role": "Business Analyst",
	"Email": "anil.dikmen@secilstore.com",
	"Phone": "5514435666",
	"Personsince": "Jul,18,20222",
			"Lastupdate": "Jul,19,20222",
	"Status": "Not Active"
},
{
	"ID": "4",
	"Name": "Ayşe",
	"Role": "Business",
	"Email": "ayse@secilstore.com",
	"Phone": "5514435666",
	"Personsince": "Jul,18,20222",
			"Lastupdate": "Jul,19,20222",
	"Status": "Not Active"
},
{
	"ID": "5",
	"Name": "Ali",
	"Role": "Business",
	"Email": "ayse@secilstore.com",
	"Phone": "5513435666",
	"Personsince": "Jul,18,20222",
			"Lastupdate": "Jul,19,20222",
	"Status": "Active"
}

]


const users = () => {

  return (
  <Layout>
   <Table header={HeaderName} content={userList} />
	</Layout>  
  )
}

export default users