import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

type Post = {
  caption: string,
  image: string,
  createdAt: Date;
  createdBy: string;
}

const posts = collection(db, "posts");
const favorites = collection(db, 'favorites');

async function addPost(post: Post){
  await addDoc(posts, post);
}

async function addFavorite(favorite: Post) {
    await addDoc(favorites, favorite)
}

export default {
  addPost,
  addFavorite,
};