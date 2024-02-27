import { useEffect, useState } from "react"

const Todos = () => {
    const [todos, setTodos] =useState(null);
    const [itemsPerPage, setItemsPerPage] =useState(10);
    const [currentPage, setCurrentPage]=useState(1);
    async function getTodos(){
       let data = await fetch ('https://jsonplaceholder.typicode.com/todos');
       data = await data.json();
       setTodos(data)
    }
    useEffect(()=>{ getTodos()}, []);
  return (
    <div>
        <h1>Todos</h1>
        <div>Items per page 
            <select onChange={(e)=> setItemsPerPage(e.target.value)} value={itemsPerPage}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
            </select>
        </div>
        {     
        todos?.length > 0 && (<ul>
        {todos.map((td, index)=>{
            if(index >= (itemsPerPage*(currentPage-1)) && (index < itemsPerPage*currentPage))
            return  <li  className="to-do" key={td.id}><label>{td.id}</label><label>{td.title}</label></li>
        })
        }</ul>)}
        {     
        todos?.length > 0 && (<div>
            {[...Array( (todos.length/itemsPerPage))].map((e, i) => {            
                return <a className={currentPage == i+1 ?"page-number active": "page-number" }onClick={(e)=> {setCurrentPage(i+1);}}>{i+1}</a>
            })}
        </div>)}
    </div>
  )
}

export default Todos