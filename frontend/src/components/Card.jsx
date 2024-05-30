

function Card({username,firstName,lastName}) {
  return (
    <>
    <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-medium text-gray-900">Username: <span className="text-gray-700">{username}</span></h3>
    <p className="text-base text-gray-500">Name: <span className="font-medium text-gray-700">{`${firstName} ${lastName}`}</span></p>
  </div>
  </>
  )
}

export default Card