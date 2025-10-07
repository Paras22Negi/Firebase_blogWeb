import { getDatabase, ref, set, onValue } from "firebase/database";
import { BlogWeb } from "../firebaseconfig";

const db = getDatabase(BlogWeb);
const starCountRef = ref(db, "posts/" + postId + "/starCount");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
