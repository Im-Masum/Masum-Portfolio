import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice'

const PostView = () => {
    const {isLoading, error, todos} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchPosts())
    }, [])
    
  return (
    <div>
        <h1>Fetch Posts</h1>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
        {todos && todos.map((todo)=> {
            const {id, title} = todo;
            return <article key={id}>
                <h2>{id}</h2>
                <h4>{title}</h4>
            </article>
        })}
    </div>
  )
}

export default PostView