import React from 'react'
import Layout from '../../components/layout/Layout'
import Table from '../../components/table/Table'
import TableHeader from '../../components/table/TableHeader'




const HeaderName=[
	
		"ID", "Name", "Role", "Email", "Phone", "Person Since", "Last Update", "Status", "Action"
	
]
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

const renderHead = (item,index) => <th key={index} scope="col" className="px-6 py-3">{item}</th>
const renderBody= (item,index)=> (
  <tr key={index} className="border-b border-gray-200" >
    <td className="px-6 py-4">{item.ID}</td>
    <td className="px-6 py-4">{item.Name}</td>
    <td className="px-6 py-4">{item.Role}</td>
    <td className="px-6 py-4">{item.Email}</td>
    <td className="px-6 py-4">{item.Phone}</td>
    <td className="px-6 py-4">{item.Personsince}</td>
    <td className="px-6 py-4">{item.Lastupdate}</td>
		<td className="px-6 py-4">{item.Status}</td>
		<td className="px-6 py-4">{item.Action}</td>
  </tr>
)


const users = () => {

  return (
  <Layout>
		<div>
			<TableHeader/>
     <Table  limit='15'
                   headData={HeaderName}
                   renderHead={(item,index) => renderHead(item,index)}
                   bodyData={userList}
                   renderBody={(item,index) => renderBody(item,index)} />
    </div>
	</Layout>  
  )
}

export default users