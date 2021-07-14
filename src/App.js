import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from "./components/Posts/Posts";
import dummyData from "./dummy-data";

const App = () => {
	const [posts, setPosts] = useState(dummyData);
	const [search, setSearch] = useState("");
	const likePost = (postId) => {
		posts.map((post) => {
			if (postId === post.id) {
				post.likes++;
				const copyOfPost = [...posts];
				console.log(post.likes);
				setPosts(copyOfPost);
			} else {
				return post;
			}
		});
	};

	return (
		<div className="App">
			<SearchBar />
			<Posts likePost={likePost} posts={posts} />
		</div>
	);
};

export default App;
