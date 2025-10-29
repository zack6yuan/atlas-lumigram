import { db } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

export type Post = {
  caption: string,
  image: string,
  createdAt: Date,
  createdBy: string,
}
export type Favorite = {
    caption: string,
    image: string,
    createdAt: Date,
    createdBy: string,
}

const posts = collection(db, "posts");
const favorites = collection(db, 'favorites');

async function addPost(post: Post){
  await addDoc(posts, post);
}

async function addFavorite(favorite: Favorite) {
    await addDoc(favorites, favorite)
}

export default {
  addPost,
  addFavorite,
};