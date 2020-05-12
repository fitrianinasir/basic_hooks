import React, { useState, useEffect } from "react";
import axios from "axios";

function HookAPI(props) {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function getPost(e){
    setPostId(e.target.value);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h3>HookAPI</h3>
      {posts.map((post) => (
        <p key={post.id}>
          {post.id}. {post.title}
        </p>
      ))}
      <hr />
      <label htmlFor="" className="mr-2">
        Masukkan nomor judul yang ingin ditampilkan:
      </label>
      <input type="number" onChange={(e) => getPost(e)} /> <br />
      <label htmlFor="">Data untuk nomor judul - {postId}</label>
      <table cellPadding="10">
          <tbody>
            <tr>
              <td>
                <label htmlFor="" className="text-primary">
                  Judul
                </label>
              </td>
              <td>
                <p>: {post.title}</p>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="" className="text-primary">
                  Isi
                </label>
              </td>
              <td>
                <p>: {post.body}</p>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  );
}

export default HookAPI;
