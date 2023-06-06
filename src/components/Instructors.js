import useFetchData from "../hooks/fetchData"
import Instructor from "./Instructor"

function Instructors() {
  const [instructors, loading, error] = useFetchData("http://localhost:9292/instructors")
  
  if (loading) {
    return <div>Loading...</div>
  }
  
  if (error) {
    return <div>Error occurred: {error}</div>
  }
  
  return (
    <div>
      {instructors?.map(elem => {
        return <Instructor 
          name={elem.name} 
          employee_id={elem.employee_id}
        />
      })}
    </div>
  )
}

export default Instructors
