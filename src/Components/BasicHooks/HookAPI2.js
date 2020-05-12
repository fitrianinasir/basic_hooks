import React, { useState, useEffect } from "react";
import axios from "axios";

function HookAPI2(props) {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(null);
  const [btnId, setBtnId] = useState(null);

  const fetchPost = () => {
    setBtnId(postId);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [btnId]);

  return (
    <div>
      <label htmlFor="">Masukkan ID : </label> <br />
      <input type="text" onChange={(e) => setPostId(e.target.value)} />
      <button onClick={fetchPost}>Fetch Post</button>
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

export default HookAPI2;
