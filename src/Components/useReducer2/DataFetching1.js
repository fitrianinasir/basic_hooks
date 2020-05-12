import React, {useEffect, useState} from 'react';
import axios from 'axios'

function DataFetching1(props) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [post, setPost] = useState({})

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      console.log(res)
      setLoading(false)
      setPost(res.data)
      setError('')
    })
    .catch(err =>  {
      setLoading(false)
      setPost({})
      setError('Something went wrong..')
    })
  }, [])
  return (
    <div>
      <h3>DATA FETCHING WITH USESTATE</h3>
      {loading? 'Loading..' : post.title}
      {error? error : null}
    </div>
  );
}

export default DataFetching1;